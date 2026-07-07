import { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getDarkMode } from '../slices/darkModeSlice';
import { getContainerWidth } from '../slices/containerWidthSlice';
import { getScreenWidth } from '../slices/screenWidthSlice';
import { motion } from 'framer-motion';
import { contactField } from './Datas';
import { useForm } from 'react-hook-form'
import { literal, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAlert } from '../context/AlertContext'
import ErrorContainer from './ErrorContainer'
import { TiTickOutline } from 'react-icons/ti';
import { IoIosSend } from "react-icons/io";
import axios from 'axios';

const contactSchema = z.object({
	name: z.string().min(1, { message: 'Name is required' }),
	company_name: z.string().min(1, { message: 'Company name is required' }),
	email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Email is invalid' }),
	mobile_no: z.string().regex(/^\d{10}$/, { message: 'Mobile number must be exactly 10 digits' }),
	subject: z.string().min(1, { message: 'Subject is required' }),
	content: z.string().min(1, { message: 'Content is required' }),
});

export default function Contact({background}) {

    const dark = useSelector(getDarkMode)
	const containerWidth = useSelector(getContainerWidth)
	const width = useSelector(getScreenWidth)
	const labelsRef = useRef({})

	const animation = (x_value) =>({
		hidden:{ x:x_value, opacity:0 },
		visible:{ 
			x:0,
			opacity:1,
			transition:{ duration:0.7, delay:0.2 }
		}
	})

    const {showAlert, closeAlert} = useAlert()

    const loadingHeader = <>Your email is sending...</>
    const successHeader = <><TiTickOutline className="text-3xl p-0" /> Your email sent successfully</>
    const failedHeader = <>Your email is sending...</>

    const handleContactSubmit = async (data) => {
        showAlert({loading: true, heading: loadingHeader})
        try{
            let response = await axios.post(`${import.meta.env.VITE_API_LINK}/email/send_email`, 
                {   subject: data.subject,
                    to_email: [import.meta.env.VITE_TO_EMAIL],
                    context: data,
                    template_name: 'portfolio'
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': import.meta.env.VITE_API_KEY
                    }
                }
            )
            if(response){
                showAlert({loading: false, heading: successHeader, message: 'Thank you for your response, I will contact you as soon as possible.'})
				reset()
            }
        }catch(err){
            console.warn('Error while sent email: ',err)
            showAlert({loading: false, heading: failedHeader, message: 'Something went wrong, Please try again!'})
        }
    }

	const {
		register,
		handleSubmit,
		formState: {errors, isSubmitting},
		setValue,
		getValues,
		trigger,
		setError,
		clearErrors,
		reset,
	} = useForm({
		resolver: zodResolver(contactSchema),
		mode: 'onTouched',
		reValidateMode: 'onSubmit'
	})

    const validateField = async (field) => {
        const value = getValues(field)
        if(value){
            await trigger(field)
        }else{
            clearErrors(field)
        }
    }

	return (
		<div>
			<div className={`${background} text-secondary-one duration-700 min-h-dvh py-3 flex font-Nunito justify-center items-center`}>
				<div>
					<h1 className='font-Nunito font-extrabold text-center'>
						Contact <span className='text-theme-color'>Me!</span>
					</h1>
					{/* <h3 className={`text-secondary-three text-xl  capitalize text-center font-extrabold`}>
						i'm verify responsive to message
					</h3> */}
					<form onSubmit={handleSubmit(handleContactSubmit)} className={`py-10 md:pt-10 grid gap-[35px] ${width<900 ? 'grid-cols-1' : 'grid-cols-2' }`}>
						{
						contactField.map((field,index)=>{
							const {id, title, colSpan, fieldType, max_length} = field;
							const x_value = index%2 == 0 ? -100 : 100
							if(fieldType !== 'textarea'){	
								return (
									<motion.div
									variants={animation(x_value)}
									initial="hidden"
									whileInView="visible"
									key={id} className={`relative ${colSpan==2 && width>899 ? 'col-span-2' : 'col-span-1' }`}>
										<input
										type='text' 
										name={id} 
										id={id}
										maxLength={max_length}
										{...register(id)}
										onInput={(e) => {
											clearErrors(id);
											fieldType == 'number' ? e.target.value = e.target.value.replace(/\D/g, '') : ''
										}}
										onBlur={() => validateField(id)}
										className={`peer text-secondary-three bg-primary-six shadow-shadow_8 !font-Nunito h-12 w-full rounded-md px-3 font-semibold text-base outline-none transition-all duration-200 relative z-[0]`}
										/> 

										<label ref={(e)=>labelsRef.current[id] = e} id={`lable_${id}`} htmlFor={id} className={`text-secondary-one font-Nunito absolute top-2 left-3 font-bold text-lg peer-focus:-top-8 peer-focus:left-1 peer-valid:-top-8 peer-valid:left-1 transition-all duration-300 w-full flex justify-between`}>
											<span>
												{title} 
												<span className={`text-red-500 text-2xl ${id == 'mobileNo' ? 'text-primary-six' : ''} `}>*</span>
											</span>
											<span className='text-red-500 text-2xl mt-2 mr-5 absolute top-8 right-1'></span>
										</label>
										<ErrorContainer message={errors[id]?.message} />
									</motion.div>
								)
							}else{
								return (
									<motion.div
									variants={animation(x_value)}
									initial="hidden"
									whileInView="visible"
									key={id} className={`relative ${colSpan==2 && width<900 ? 'col-span-1' : 'col-span-2' }`}>
										<textarea 
										type={fieldType} 
										name={id} 
										id={id}
										{...register(id)}
										onInput={() => clearErrors(id)}
										onBlur={() => validateField(id)}
										className={`peer text-secondary-three bg-primary-six shadow-shadow_8 !font-Nunito !h-32 w-[100%] rounded-md py-2 px-3 font-semibold text-base outline-none transition-all duration-200 resize-none`}/>
										<label htmlFor='content' className={`text-secondary-one font-Nunito absolute top-2 left-3 font-bold text-lg peer-focus:-top-8 peer-focus:left-1 peer-valid:-top-8 peer-valid:left-1 transition-all duration-300`}>
											Content 
											<span className='text-red-500 text-2xl'>*</span>
										</label>
										<ErrorContainer message={errors[id]?.message} />
									</motion.div>
								)
							}
						})
						}
        				<div className={`flex justify-center ${width<900 ? 'col-span-1' : 'col-span-2' }`}>
							<button disabled={isSubmitting} className={`${ dark ? 'text-black hover:bg-black' : 'text-white hover:bg-white' } bg-theme-color  px-4 py-2 border-2 border-theme-color  hover:!text-theme-color rounded-md transition-all duration-500 font-extrabold flex items-center gap-1 text-xl`}>Send <IoIosSend size={24}/></button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
