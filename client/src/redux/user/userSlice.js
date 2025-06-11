import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    currentUser:null,
    error:false,  
    loading:false,
    success:false,

};
const userSlice=createSlice({
     name:'user',
     initialState,
     reducers:{
          signInStart:(state)=>{
             state.loading=true;
          },
          signInSuccess:(state,action)=>{
            state.currentUser=action.payload,
            state.loading=false;
            state.error=false;
            state.success=true
          },
          signInFailure:(state,action)=>{
              state.loading=false;
            state.error=action.payload||true; // if action.payload is undefined, it will default to true
            state.success=false;
          }


     }
})

export const {signInStart,signInSuccess,signInFailure}=userSlice.actions;

export default userSlice.reducer;