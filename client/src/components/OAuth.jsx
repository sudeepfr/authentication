import {GoogleAuthProvider, signInWithPopup,getAuth} from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import {useNavigate} from 'react-router-dom';


function OAuth(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAuthbutton=async()=>{

         try{
               const provider = new GoogleAuthProvider();
               const auth = getAuth(app); // 'app' should be your Firebase app instance
               // You can add scopes if needed, e.g., provider.addScope('https://www.googleapis.com/auth/contacts.readonly');   
               // This will open the Google sign-in popup
               const result = await signInWithPopup(auth, provider);
               console.log(result);
               // This gives you a Google Access Token. You can use it to access the Google API.
                const res=await fetch(`${import.meta.env.VITE_API_URL}/api/auth/googleLogin`, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name : result.user.displayName,
                        email: result.user.email,
                        photo: result.user.photoURL,
                    }),

                });
                const data = await res.json();
                console.log('row rewsponse',data);
                if(data.success===false){
                    console.log("login failed");
                    return;
                }else{
                    dispatch(signInSuccess(data));
                    navigate('/'); // redirect to home page after successful login
                }

         }catch(err){
              console.log(err,"Could not login with google");
         }
    }
     return (
        <button type='button' className="bg-red-700  text-white p-3 rounded-lg uppercase" onClick={handleAuthbutton}>Continue with google</button>
     )
}
export default OAuth; 