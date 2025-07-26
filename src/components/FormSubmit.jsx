import axios from 'axios';
import { IoIosSend } from "react-icons/io";
import { useAlert } from '../context/AlertContext'
import { TiTickOutline } from 'react-icons/ti';


function SubmitFunction({formData}){
    const {showAlert, closeAlert} = useAlert()

    const loadingHeader = <>Your email is sending...</>
    const successHeader = <><TiTickOutline className="text-3xl p-0" /> Your email sent successfully</>
    const failedHeader = <>Your email is sending...</>

    const handleSubmit = async(event) =>{
        event.preventDefault();
        showAlert({loading: true, heading: loadingHeader})
        try{
            let response = await axios.post("http://localhost:8080/email_send",formData,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            // response = await response.json()
            console.log(response)
            if(response.data.success){
                showAlert({loading: false, heading: successHeader, message: 'Thank you for your response, I will contact you as soon as possible.'})
            }
        }catch(err){
            console.warn('Error while sent email: ',err)
            showAlert({loading: false, heading: failedHeader, message: 'Something went wrong, Please try again!'})
        }
    }

    return (
            <button className={`${ dark ? 'text-black hover:bg-black' : 'text-white hover:bg-white' } bg-theme-color  px-4 py-2 border-2 border-theme-color  hover:!text-theme-color rounded-md transition-all duration-500 font-extrabold flex items-center gap-1 text-xl`} onClick={handleSubmit}>Send <IoIosSend size={24}/></button>
    )
}
export default SubmitFunction;
