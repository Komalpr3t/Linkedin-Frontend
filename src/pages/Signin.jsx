//rafce -> react arrow function component export
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
//import action
import { loginSuccessful } from "../redux/slices/userSlice";
//import dispatch
import { useDispatch } from "react-redux";

// all hooks in react start with 'use' -> useState, useEffect, useNavigate

const Signin = () => {

  // dispatch
  const dispatch = useDispatch();

  //stateforinput fields
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //two new states
  const [ loading, setLoading] = useState(false);
  const [err, setError] = useState(null);



  console.log("error: ", err);
  console.log("Email: ", email);
  console.log("Password: ", password);

  const navigate = useNavigate();

  //function to signin user

  const handleSignin = async (e) => {

    //prevent the normal behavior of forms -> to refresh the page unnecessarily on the click of submit button
    e.preventDefault();
    
    try {

      setLoading(true);
      setError(null);

      const res = await axios.post("https://linkedin-backend-five.vercel.app/api/signin",
      //state variables (req.body)
      {
         email, password
      },
      {
        withCredentials: true
      }
    );

    console.log("response from the signin api ", res.data);
    // redirecting to home page after successful signin
    if(res.data.user){
      //dispatch the action to store user data in redux store
      dispatch(loginSuccessful(res.data.user));
      //navigate to home page after successful signin
      navigate("/");
    }

    //storing error message from backend to display it on frontend
    if(!res.data.user){
      setError(res.data.message);
    
    } 

    setLoading(false)
    
    //check response from backend

    } 
    catch (err) {
      console.log("Error signing up: ", err);
      setError("All fields are required");
      setLoading(false)
    }
  };

  return (
    <div className="flex justify-center gap-30 items-center min-h-screen">

      {/*Signin form*/}
      <div>
        <form onSubmit={handleSignin} className="flex flex-col gap-3 border-2 border-black p-16 rounded-lg">
          <h1 className="text-3xl font-bold text-center">Signin</h1>
          
          <input
            className="text-2xl border-2 border-black p-4 outline-none rounded-lg"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          
          <input
            className="text-2xl border-2 border-black p-4 outline-none rounded-lg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />

          <div className="flex justify-center p-2">
            <button
              className="bg-blue-500 w-30 text-xl p-2 rounded-lg cursor-pointer text-white"
              type="submit"
            >{loading ? "Signing in..." : "Signin"}
            </button>
          </div>

          {/* */}
          
          <p className="text-center text-md text-gray-500">
            Don't have an account?{' '}
            <NavLink to={"/signup"}>
              <span className="text-blue-600">Create Account</span>
            </NavLink>
          </p>

          {/*display error message*/}
          <p className="flex justify-center font-semibold text-red-700">{err ? err : ""}</p>
        
        </form>
      </div>

      {/*LinkedIn Logo*/}
      <div>
        <img
          className="w-80"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEUAfrv///+fv9sAeLgAerkAdrcAfLoAcrZ5qtD2+fzX4+9fmsjw9vkAdLdGjsKryODe6fNGksQZgr1Xk8XI2uqFr9MAa7OWudjp8fexzeN3pM0yiMAsgby/1uhuoszQ4O5A3pWUAAADwElEQVR4nO2c23aqMBCGCTkAAQQNiIji+7/lBqxu1Jm2gb2ZXOS/6lrNsl/DZDIHnIA9leg23h8CAh32cauTvyTB86fCiJwLRQGlBM+FKT6gKhGR8MzIIlG9QtWSGGnCkvUMKklzaqC78jR5QqWSmuYhmT6gakf2aVRe36EqZ/ZplKwmKBo3gEmJEaqIqDleFRUsSIxTGzVslUkCLagp3iV00Dp09O7K2yDm1BDv4nGwd+/x7YODY3Y+WDpJ+OS1lRSXUnKnzoI8Bn0TNnF3dCEGnCS7+vTIKcKdG6FEdH4gjcoa6hg+GOPlir2q7Mh9v2zZu/SFeK+i6wfTsFe05i57gImxkDIeVJcTCJWkhB6LxyATYy2hYzjCGzWIEEphTCwlcwscNvPJ1Mm2SjYo1JXs/MkQhbrRQeE7VZFB8RqFokvIxA6Fqul8whGFUnS3X14gTJownRYmgaFI02kgmhp1ow3zZAZB7WjTGmEAKvJaiDSfTPQJDe9eM4fS0DMNT1DW5RMpaQ7Uz+5LIt+FN11q3aaRI0ijhBxSUBXlThUTRtEnxl5erkvwsRT4kAutKSVzU4fVaYqDTvranHfRmmtBcUhv7kp8u0RIFeq3a/2ka7W4gsr7EtJ1HngKo4Elt+7r17mBYzI2XA/LniJS4dDzBEukUHia7Ka/yEWBBK/Dkvay6NJaDpVNUFGPlkimReclsf5KKI5ns19aUpNYByWxZGimwr5UuQZKcMTCX9XmtlRroKJf7NOoxtauVkBdfrSnh86WZ3A51AkvuL0rsfRXK3YKTBhhFXZHcDmUje4+zTEo1lqV4DaCYlZuYSuoxsaqtoKyKuNsBZXZvP2zFRTrLSK+fwSVZT8tsak2/wOoU3FOjTFpDLUznyqPG0JV+6MUQikleJSH3yzcEKrms2Oloh6/eyxKFeugEvNmKfKA8lv0WtdBnT9cokQbK/3vPdUqqBawE7B7P8qir7IGKusAM0HbPRYXzRooOEqSGoaySGvWQMEv+WE9xG2gMtjziB7+F7aBQgI31cE58zZQWK9EltDqjaAwbxjdCKGwCAnxVJtAJViGksPJ/CZQaNqEtIA9lIfyUB7KQ3koD+WhPJSH8lAeykN5KA/loTyUh/JQHspDzVW+QkFL/mN1WOxDSPW8m6A6aEmDfS+Y9+BH2nwLVUhIrx0OBa5Be8LwRzr3+r3Xejk5GMTJESrkX7D6EI/dHMvj5AAjJ0c9OTkUy83xYW4OWnNyJJ2bw/vcHHPo5EBI5uboTObkkFHm0jjWP3vDTm3rs2ocAAAAAElFTkSuQmCC"
          alt="LinkedIn Logo"
        />
      </div>
    </div>
  );
};

export default Signin;
