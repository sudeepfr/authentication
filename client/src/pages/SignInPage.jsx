import React, { useState } from 'react';
import { Link ,useNavigate} from "react-router-dom";
function SignInPage() {

   const [formData, setFormData] = useState({});
   const [isLoading, setLoading] = useState(false);
   const [err,setErr]=useState(false);
   const [success,setSuccess]=useState(false);
   const navigate=useNavigate();
   const handleOnChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value })  //e.target.id--->username and e.target.value-->value 
   }

   const handleOnSubmit = async (e) => {
      
         e.preventDefault();
         setLoading(true);
   
         const res = await fetch('http://localhost:3000/api/auth/signIn', {
            method: 'POST',
            credentials: 'include',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         });
         const data = await res.json();
         
         setLoading(false);
          if(data.success===false ){
             setErr(true);
          } 
          if(data.message){
             setSuccess(true);
          }
        navigate('/'); // redirect to home page after successful login
       
   };


   return (
      <div className='p-3 max-w-lg      mx-auto'>
         <h1 className="text-3xl text-center font-semibold">sign in</h1>
         <form onSubmit={handleOnSubmit} className='flex flex-col w-300 gap-4 '>

            <input type="email"
               placeholder='email' id='email' className="bg-slate-100 rounded-lg " onChange={handleOnChange}></input>
            <input type="password"
               placeholder='password' id='password' className="bg-slate-100 rounded-lg " onChange={handleOnChange}></input>

            <button className={`bg-slate-700  text-white p-3 rounded-lg uppercase ${isLoading ? 'bg-indigo-500 opacity-25' : 'bg-indigo-500 opacity-100 ...'} `} disabled={isLoading}> {isLoading ? "signing in..." : "sign in"}</button>
         </form>
         <div className='flex gap-2 mt-5'>

            <p>Do not have an account?</p>
            <Link to='/SignUp  '> <span className='text-blue-500'> sign up</span></Link>
             {err?<p className='text-red-800'>Please change your username and email </p>:" "}
             {success?<p>account created successfully</p>:" "}
         </div>
      </div>
   )
}
export default SignInPage;