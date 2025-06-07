import React from 'react';
import { Link } from "react-router-dom"; function SignUpPage() {
   return (
      <div className='p-3 max-w-lg      mx-auto'>
         <h1 className="text-3xl text-center font-semibold">signup</h1>
         <form className='flex flex-col w-300 gap-4 '>

            <input type="text"
               placeholder='userName' id='username' className="bg-slate-100 rounded-lg "></input>
            <input type="email"
               placeholder='email' id='email' className="bg-slate-100 rounded-lg "></input>
            <input type="password"
               placeholder='password' id='password' className="bg-slate-100 rounded-lg "></input>

            <button className='bg-slate-700   text-white p-3 rounded-lg uppercase  hover:opacity-95 '>SignUp</button>
         </form>
         <div className='flex gap-2 mt-5'>

         <p>Have an account?</p>
         <Link to='/SignIn  '> <span  className='text-blue-500'> sign in</span></Link>
         </div>
      </div>
   )
}
export default SignUpPage;