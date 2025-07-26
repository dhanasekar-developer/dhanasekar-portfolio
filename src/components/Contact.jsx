import React, { useState, useRef, useEffect } from 'react'
import SubmitFunction from './FormSubmit';
import { useSelector } from 'react-redux';
import { getDarkMode } from '../slices/darkModeSlice';
import { getContainerWidth } from '../slices/containerWidthSlice';
import { getScreenWidth } from '../slices/screenWidthSlice';
import { motion } from 'framer-motion';
import { contactField } from './Datas';
import { useForm } from 'react-hook-form'


export default function Contact({background}) {

	const dark = useSelector(getDarkMode)
	const containerWidth = useSelector(getContainerWidth)
	const width = useSelector(getScreenWidth)

	const labelsRef = useRef({})
	const inputFieldsRef = useRef({})

	const animation = (x_value) =>({
		hidden:{ x:x_value, opacity:0 },
		visible:{ 
			x:0,
			opacity:1,
			transition:{ duration:0.7, delay:0.2 }
		}
	})

	return (
		<div>
			<div className={`${background} text-secondary-one duration-700 min-h-dvh py-3 flex font-Nunito justify-center items-center`}>
				<div>
					<h1 className='font-Nunito font-extrabold text-center'>
						Contact <span className='text-theme-color'>Me!</span>
					</h1>
					<h3 className={`text-secondary-three text-xl  capitalize text-center font-extrabold`}>
						i'm verify responsive to message
					</h3>
					<form className={`py-10 md:pt-10 grid gap-[35px] ${width<900 ? 'grid-cols-1' : 'grid-cols-2' }`}>
						{
						contactField.map((field,index)=>{
							const {id,title,colSpan,fieldType} = field;
							const x_value = index%2 == 0 ? -100 : 100
							if(fieldType == 'text'){	
								return (
									<motion.div
									variants={animation(x_value)}
									initial="hidden"
									whileInView="visible"
									key={id} className={`relative ${colSpan==2 && width>899 ? 'col-span-2' : 'col-span-1' }`}>
										<input
										type={fieldType} 
										name={id} 
										id={id}
										ref={(e)=>inputFieldsRef.current[id] = e}
										value={formData[id]}
										onChange={handleChange}
										required
										className={`${id != 'email' ? 'capitalize' : ''}  peer text-secondary-one  bg-primary-six shadow-shadow_8 !font-Nunito h-12 w-full rounded-md  px-3 font-bold  text-lg text-gray-300 outline-none transition-all duration-200 relative z-[0]`}
										/> 

										<label ref={(e)=>labelsRef.current[id] = e} id={`lable_${id}`} htmlFor={id} className={`text-secondary-one font-Nunito absolute top-2 left-3 font-bold text-lg peer-focus:-top-8 peer-focus:left-1 peer-valid:-top-8 peer-valid:left-1 transition-all duration-300 w-full flex justify-between`}>
											<span>
												{title} 
												<span className={`text-red-500 text-2xl ${id == 'mobileNo' ? 'text-primary-six' : ''} `}>*</span>
											</span>
											<span className='text-red-500 text-2xl mt-2 mr-5 absolute top-8 right-1'></span>
										</label>
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
										value={formData[id]}
										onChange={handleChange}
										required
										className={` peer text-secondary-one bg-primary-six shadow-shadow_8 !font-Nunito !h-32 w-[100%] rounded-md py-2 px-3 font-bold capitalize text-lg  outline-none transition-all duration-200 resize-none`}/>
										<label htmlFor='content' className={`text-secondary-one font-Nunito absolute top-2 left-3 font-bold text-lg peer-focus:-top-8 peer-focus:left-1 peer-valid:-top-8 peer-valid:left-1 transition-all duration-300`}>
											Content 
											<span className='text-red-500 text-2xl'>*</span>
										</label>
									</motion.div>
								)
							
							}
						})
						}
        				<div className={`flex justify-center ${width<900 ? 'col-span-1' : 'col-span-2' }`}>
							<SubmitFunction formData={formData} />
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
