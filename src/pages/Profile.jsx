import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios';


const Profile = () => {
  // state variables for form fields

  const [headline, setHeadline] = useState("")
  const [summary, setSummary] = useState("")

  const [companyName, setCompanyName] = useState("")
  const [joiningDate, setJoiningDate] = useState("")
  const [lastDate, setLastDate] = useState("")
  const [description, setDescription] = useState("")

  // const [skills, setSkills] = useState([])

  const [schoolName, setSchoolName] = useState("")
  const [session, setSession] = useState("")

  // currentUser

  const {currentUser} = useSelector((state) => state.user);

  const handleUpdateProfile = async(e) => {
    try{
      e.preventDefault();
      // api call to update profile

     const response = await axios.post("https://linkedin-backend-five.vercel.app/api/create-profile",
      // req.body
        {headline, userId: currentUser._id, summary,
          experience : {
            companyName, joiningDate, lastDate, description
          },
          education : {
            schoolName, session
          },
        }
     );
      console.log("response", response);
      if(response.data.profile){
        setHeadline("");
        setSummary("");
        setCompanyName("");
        setJoiningDate("");
        setLastDate("");
        setDescription("");
        setSchoolName("");
        setSession("");
        return alert("Profile updated successfully")
      }
    }catch(err){
      console.log("err", err);
    }
  }


  return (
    <div >
      <h1 className='text-5xl font-semibold italic ml-20 mt-10'>Hi!,{" " + currentUser?.username}</h1>


<div className='flex justify-center items-center'>

      <form onSubmit={handleUpdateProfile} className='flex flex-col gap-4 mt-8 border-2 border-gray-800 rounded-2xl py-30 px-60'>

        <h1 className='text-2xl font-semibold'>Update Profile</h1>
        <input value={headline} onChange={(e) => setHeadline(e.target.value)} className='p-4 text-lg border-2 border-black outline-none rounded-lg' type="text" placeholder='headline'/>

        <input value={summary} onChange={(e) => setSummary(e.target.value)} className='p-4 text-lg border-2 border-black outline-none rounded-lg' type="text" placeholder='summary'/>

        {/* Experience -> 4 fields */}

        <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} className='p-4 text-lg border-2 border-black outline-none rounded-lg' type="text" placeholder='company'/>

        <input value={joiningDate} onChange={(e) => setJoiningDate(e.target.value)} className='p-4 text-lg border-2 border-black outline-none rounded-lg' type="text" placeholder='joining date'/>

        <input value={lastDate} onChange={(e) => setLastDate(e.target.value)} className='p-4 text-lg border-2 border-black outline-none rounded-lg'   type="text" placeholder='Last date'/>

        <input value={description}   onChange={(e) => setDescription(e.target.value)} className='p-4 text-lg border-2 border-black outline-none rounded-lg' type="text" placeholder='description'/>

        {/* skills */}

        {/* <input onChange={(e) => setSkills(e.target.value.split(","))} className='p-4 text-lg border-2 border-black outline-none rounded-lg' type="text" placeholder='skills'/> */}

        {/* Education -> 4 fields */}

        <input value={schoolName} onChange={(e) => setSchoolName(e.target.value)} className='p-4 text-lg border-2 border-black outline-none rounded-lg'   type="text" placeholder='School Name'/>

        <input value={session} onChange={(e) => setSession(e.target.value)} className='p-4 text-lg border-2 border-black outline-none rounded-lg' type="text" placeholder='session'/>

        <button type='submit' className='p-4 text-lg bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600'>Save</button>

      </form>
      </div>
    </div>
  )
}

export default Profile