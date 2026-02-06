//this file will contain actions + reducers along with an initial state for user data
import { createSlice } from '@reduxjs/toolkit';

//create initial state
const initialState = {
    //initially no user has logged in
    currentUser: null,
}

// user slice

//Slice -> reducers  + actions (initial state)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //action
        //state -> initial state
        loginSuccessful: (state, action) => {
            //modify the initial state
            state.currentUser = action.payload;
            //payload -> data that we pass when you call this action
        }
    }
});

//export the actions

export const { loginSuccessful } = userSlice.actions;

//export the reducer
export default userSlice.reducer;