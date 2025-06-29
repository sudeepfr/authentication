import React, { useState } from 'react';
import { Link ,useNavigate} from "react-router-dom";
import OAuth from '../components/oAuth';
import { useSelector, useDispatch } from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';

function SignUpPage() {
  

   const [formData, setFormData] = useState({});
   // const [isLoading, setLoading] = useState(false);
   // const [err,setErr]=useState(false);
   // const [success,setSuccess]=useState(false);

   const  navigate=useNavigate();
   const dispatch=useDispatch();
   const {error,loading,success}=useSelector((state)=>state.user);
    
   const handleOnChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value })  //e.target.id--->username and e.target.value-->value 
   }

   const handleOnSubmit = async (e) => {
      
         e.preventDefault();
         // setLoading(true);
         dispatch(signInStart());
   
         const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/signUp`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         });
         const data = await res.json();
      
          if(data.success===false ){
            dispatch(signInFailure(data.message )) // dispatching error message to userSlice
            // setErr(true);
          } else{
            dispatch(signInSuccess(data)); // dispatching user data to userSlice
            navigate('/SignIn'); // redirect to sign in page after successful signup
          }
       
   };


   return (
      <div className='p-3 max-w-lg      mx-auto'>
         <h1 className="text-3xl text-center font-semibold">signup</h1>
         <form onSubmit={handleOnSubmit} className='flex flex-col w-300 gap-4 '>

            <input type="text"
               placeholder='userName' id='username' className="bg-slate-100 rounded-lg " onChange={handleOnChange}></input>
            <input type="email"
               placeholder='email' id='email' className="bg-slate-100 rounded-lg " onChange={handleOnChange}></input>
            <input type="password"
               placeholder='password' id='password' className="bg-slate-100 rounded-lg " onChange={handleOnChange}></input>

            <button className={`bg-slate-700  text-white p-3 rounded-lg uppercase ${loading ? 'bg-indigo-500 opacity-25' : 'bg-indigo-500 opacity-100 ...'} `} disabled={loading}> {loading ? "signing up..." : "sign up"}</button>
            <OAuth></OAuth>
         </form>
         <div className='flex gap-2 mt-5'>

            <p>Have an account?</p>
            <Link to='/SignIn  '> <span className='text-blue-500'> sign in</span></Link>
             {error?<p className='text-red-800'>Please change your username and email </p>:" "}
             {success?<p>account created successfully</p>:" "}
         </div>
      </div>
   )
}

export default SignUpPage;