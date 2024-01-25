
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function Toastal(){

    const handleRegistration = async () => {
        try {
         
          toast.success('Registration successful!');
        } catch (error) {
         
          toast.error('Registration failed. Please try again.');
        }
      };
    return(
        <>
 
        <button  onClick={handleRegistration}>
            Notify!
        </button>
        <ToastContainer/>
        </>
    )
}