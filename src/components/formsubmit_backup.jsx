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

        // fields.map((e)=>{
        //     if(e.value == '' && alertShow){
        //         Swal.fire({
        //             title: `<span class="font-Nunito text-xl md:text-2xl ">Plase Enter Your ${e.title}</span>`,
        //             icon: "info",
        //             timer: 1500,
        //             background: `${dark ? "#151825" : "#f7f9fb" }`,
        //             color: `${dark ? "#fff" : "#000" }`,
        //             showConfirmButton: false,
        //             customClass:{
        //                 icon: 'alertIcon',
        //                 popup: 'aletrPopup',
        //                 image: 'alertImg',
        //             },
        //             willOpen: () => {
        //                 document.querySelector(".swal2-popup").style.border = `${dark ? "2px solid gray" : "3px solid #b7bdc7" }`;
        //                 },
                    
        //             });
        //         alertShow = false;
        //     }
        // })
        
        // if(allFieldsFilled && mobileNoValid && emailValid){
        //     const result = Swal.fire({
        //         title: "Are you sure?",
        //         text: "Do you want to send email?",
        //         icon: "info",
        //         background: `${dark ? "#151825" : "#f7f9fb" }`,
        //         color: `${dark ? "#fff" : "#000" }`,
        //         showCancelButton: true,
        //         cancelButtonColor: "#d33",
        //         confirmButtonColor: "#02b3d1",
        //         confirmButtonText: "Send",
        //         reverseButtons: true,
                
        //         willOpen: () => {
        //             document.querySelector(".swal2-popup").style.border = `${dark ? "2px solid gray" : "3px solid #b7bdc7" }`;
        //           },
        //       }).then(async(result) => {
        //         if (!result.isConfirmed) return;
        //         Swal.fire({
        //             title: "Sending Email...",
        //             text: "Please wait while send your email.",
        //             background: `${dark ? "#151825" : "#f7f9fb" }`,
        //             color: `${dark ? "#fff" : "#000" }`,
        //             allowOutsideClick: false,
        //             showConfirmButton: false,
        //             willOpen: () => {
        //                 Swal.showLoading()
        //                 document.querySelector(".swal2-popup").style.border = `${dark ? "2px solid gray" : "3px solid #b7bdc7" }`;
    
        //             },
        //         });
        
        //         setLoading(true);
        //         try{
    
        //             let response = await axios.post("http://localhost:8080/email_send",formData,{
        //                 headers:{
        //                     'Content-Type': 'application/json'
        //                 }
        //             })
        //             response = response.data
        //             setLoading(false)
        //             Swal.close()
        //             console.log(response, '-----------')
    
        //             if(response.success){
        //                 Swal.fire({
        //                     title: "Email Sent!",
        //                     text: "Your email has been sent",
        //                     icon: "success",
        //                     background: `${dark ? "#151825" : "#f7f9fb" }`,
        //                     color: `${dark ? "#fff" : "#000" }`,
        //                     willOpen: () => {
        //                         document.querySelector(".swal2-popup").style.border = `${dark ? "2px solid gray" : "3px solid #b7bdc7" }`;
        //                       },
                            
        //                 });
        //                 setFormData({
        //                     userName : '',
        //                     companyName : '',
        //                     email: '',
        //                     mobileNo: '',
        //                     subject: '',
        //                     content: '',
        //                 })
        //             }
        //         }
        //         catch(error){
        //             setLoading(false)
    
        //             Swal.fire({
        //                 title: "Error",
        //                 text: "Some went worng please try again!",
        //                 icon: "error",
        //                 background: `${dark ? "#151825" : "#f7f9fb" }`,
        //                 color: `${dark ? "#fff" : "#000" }`,
        //                 willOpen: () => {
        //                     document.querySelector(".swal2-popup").style.border = `${dark ? "2px solid gray" : "3px solid #b7bdc7" }`;
        //                   },
        //             });
        //         }
        //     });
        // }
    }


    return (
            <button className={`${ dark ? 'text-black hover:bg-black' : 'text-white hover:bg-white' } bg-theme-color  px-4 py-2 border-2 border-theme-color  hover:!text-theme-color rounded-md transition-all duration-500 font-extrabold flex items-center gap-1 text-xl`} onClick={handleSubmit}>Send <IoIosSend size={24}/></button>
    )
}
export default SubmitFunction;
