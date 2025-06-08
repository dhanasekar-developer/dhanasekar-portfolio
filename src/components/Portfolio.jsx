import React, { useEffect, useState } from 'react'
import project_1 from "../assets/project_1.png"
import { FaGithub } from "react-icons/fa6";
import { FaArrowLeft,FaArrowRight,FaLongArrowAltUp  } from "react-icons/fa";
import { projects } from './Datas';
import { getScreenWidth } from '../slices/screenWidthSlice';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'



export default function Projects({background}) {

	const width = useSelector(getScreenWidth)
	const [project,setProject] = useState(projects)
	const [nextButton, setNextButton] = useState(false)
	const [prevButton, setPrevButton] = useState(false)

	const changeProject = (direction) => {
		
		const current = project.find((e)=> e.active == true)
		const newId = direction == 'next' ? Number(current['id']) + 1 : Number(current['id']) - 1
		const exist = project.find((e)=> e.id == newId)
		if(exist){
			setProject(
				project.map((e)=>({
					...e,
					active: e.id == newId
				}))
			)
		}
	}
	

	useEffect(()=>{
		
		const currentProject = project.find((e)=>e.active == true)
		
		if(!currentProject) return;

		const nextExist = project.some((e)=>e.id == (Number(currentProject.id) + 1))
		const prevExist = project.some((e)=>e.id == (Number(currentProject.id) - 1))

	
		setNextButton(nextExist)
		setPrevButton(prevExist)

	},[project])

	return (
		<div className={`${background} text-secondary-one duration-700 min-h-[calc(100dvh-90px)] flex flex-col justify-center items-center py-4`}>
			<h1 className='font-Nunito font-extrabold text-theme-color mb-5'>
				Portfolio
			</h1>
			<div className=''>
				{
					project.map((e)=>{
						const {id, title, content, language, deployLink, githubLink, video, active} = e
						if(active == true){
							return(
								<div key={id} className='flex gap-5 flex-wrap justify-center'>
	
									<motion.div 
									initial={{ x:-100, opacity:0 }}
									whileInView={{ x:0, opacity:1 }}
									transition={{ duration:0.5, delay:0.2 }}
									className='max-w-[500px]'>
										<div className=' px-2'>
											<h1 className='font-extrabold'>0{id}</h1>
											<h3 className='font-extrabold capitalize text-[24px]'>{title}</h3>
											<p className='font-medium capitalize text-justify'>{content}</p>
											<h6 className='font-extrabold capitalize text-theme-color'>{language}</h6>
											<hr />
											<div className='flex gap-3'>
												<button className='bg-transparent border-2 border-theme-color p-2 rounded-full text-3xl flex justify-center items-center shadow-shadow-inset'>
													<a href={deployLink} className='text-theme-color rotate-45' title='Deploy Site'>
														<FaLongArrowAltUp />
													</a>
												</button>
												<button className='bg-transparent border-2 border-theme-color p-2 rounded-full text-3xl flex justify-center items-center shadow-shadow-inset'>
													<a href={githubLink} className='text-theme-color' title='GitHub Link'>
														<FaGithub />
													</a>
												</button>
											</div>
										</div>
										
										<div className='flex gap-5 mt-4 w-full justify-center'>
											<button className={`bg-transparent border-[3px] text-theme-color border-theme-color p-2 rounded-md text-2xl flex justify-center items-center ${prevButton ? '!opacity-100' : '!opacity-50' }`} 
											onClick={()=>changeProject('prev')}
											>
												<FaArrowLeft />
											</button>
											<button className={`bg-transparent border-[3px] text-theme-color border-theme-color p-2 rounded-md text-2xl flex justify-center items-center ${nextButton ? '!opacity-100' : '!opacity-50' }`}
											onClick={()=>changeProject('next')}
											>
												<FaArrowRight />
											</button>
										</div>
									</motion.div>
									<motion.div
									initial={{ x:100, opacity:0 }}
									whileInView={{ x:0, opacity:1 }}
									transition={{ duration:0.5, delay:0.2 }}
									className={`${width <600 ? width<500 ? 'w-[97%] h-auto' : 'w-[90%] h-auto' : 'h-[300px] w-[500px]'} `}>
										<img src={video} alt=""  className={`w-full h-full !transition-opacity !duration-500 `}/> {/* ------video------ */}
									</motion.div>
								</div>
							)
						}
					})
				}
			</div>
				
				
			
			
		</div>
	)
}
