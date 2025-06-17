import { useSelector } from "react-redux";

function Profile() {
     const {currentUser}=useSelector((state)=>state.user)
     console.log(currentUser);
     return (
     <div className="p-3 max-w-lg mx-auto">
          
          <h1 className="text-3xl text-center font-semibold p-3">Profile</h1> 
           <form className="flex justify-center items-center flex-col ">
               <img src={currentUser.profilePicture} alt="Profile" className='w-20 h-20 rounded-full object-cover' />
                <input  defaultValue={currentUser.username} type="text" placeholder="userName" className="bg-slate-200 rounded-lg p-3 m-1 w-60 h-10"/> 
                <input  defaultValue={currentUser.email}type="email" placeholder="email" className="bg-slate-200 rounded-lg p-3 m-1 w-60 h-10"/>
                <input type="password" placeholder="password" className="bg-slate-200 rounded-lg p-3 m-1 w-60 h-10"/>
                <button className="bg-slate-700 text-white p-3 rounded-lg upparcase hover:opacity-95 disable:opacity-80 w-60">update</button>
           </form>
         <div className="flex justify-between mt-5">
           <span className="text-red-700 cursor-pointer">delete account </span>
           <span className="text-red-700 cursor-pointer">update account </span>
           </div>
     </div>
     )

}
export default Profile;     