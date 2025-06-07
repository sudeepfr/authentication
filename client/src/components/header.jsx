import React from 'react'
import { Link} from "react-router-dom";
 function Header(){
      return (
         <div className="bg-slate-300">  
         <div className='flex  justify-between items-center	'>

         <Link to='/'> <h1 className="font-bold items-center">Auth app</h1></Link>
          <ul  className="flex justify-between " >

           <Link to='/'> <li className='m-4'>Home</li> </Link>
           <Link to='/SignIn'>  <li className='m-4'>signIn</li></Link>
           <Link to='/SignUp'>  <li className='m-4'>signUp</li></Link>
           <Link to='/About'>   <li className='m-4' >About</li></Link>

          </ul>
         </div>

         </div>

      )
 }
  export default Header;