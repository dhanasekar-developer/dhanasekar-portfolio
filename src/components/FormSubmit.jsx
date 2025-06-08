import React from 'react'
import Swal from 'sweetalert2'
import axios from 'axios';
import { IoIosSend } from "react-icons/io";
import { useAlert } from '../context/AlertboxContext';

function SubmitFunction({formData,setFormData,fields,dark,allFieldsFilled,mobileNoValid,emailValid,setLoading}){
    const alert = useAlert()

    const handleSubmit = async(event) =>{
        event.preventDefault();
        console.log('handleSubmit called')
	    let alertShow = true;
        alert('alert check','success')



    }


    return (
            <button className={`${ dark ? 'text-black hover:bg-black' : 'text-white hover:bg-white' } bg-theme-color  px-4 py-2 border-2 border-theme-color  hover:!text-theme-color rounded-md transition-all duration-500 font-extrabold flex items-center gap-1 text-xl`} onClick={handleSubmit}>Send <IoIosSend size={24}/></button>
    )
}
export default SubmitFunction;
