import axios from 'axios';
import { useAlert } from '../context/AlertContext'
import { TiTickOutline } from 'react-icons/ti';


function SubmitFunction({formData}){
    const {showAlert, closeAlert} = useAlert()

    const loadingHeader = <>Your email is sending...</>
    const successHeader = <><TiTickOutline className="text-3xl p-0" /> Your email sent successfully</>
    const failedHeader = <>Your email is sending...</>
    const apiLink = import.meta.env.VITE_API_LINK

    const handleSubmit = async(event) =>{
        event.preventDefault();
        showAlert({loading: true, heading: loadingHeader})
        try{
            let response = await axios.post(`${apiLink}/email_send`,formData,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            if(response.data.success){
                showAlert({loading: false, heading: successHeader, message: 'Thank you for your response, I will contact you as soon as possible.'})
            }
        }catch(err){
            console.warn('Error while sent email: ',err)
            showAlert({loading: false, heading: failedHeader, message: 'Something went wrong, Please try again!'})
        }
    }
}
export default SubmitFunction;
