import React from 'react'
import { motion } from 'framer-motion'


export default function About({background}) {
  return (
    <div className={`${background} text-secondary-one duration-700 min-h-[calc(100dvh-70px)] max-800:min-h-[calc(100dvh-160px)] flex justify-center gap-28 max-1700:gap-10 items-center py-4`}>
		<motion.div
		initial={{ x:-100, opacity:0 }}
		whileInView={{ x:0, opacity:1 }}
		transition={{ duration:0.7, delay:0.2 }}
		className='size-[350px] max-1600:hidden block rounded-full bg-theme-color font-Nunito'>
			{/* image */}
		</motion.div>
		<div className='max-w-[85%] ld:max-w-[80%] xl:max-w-[800px]'>
			<h1 className='font-Nunito font-extrabold'>
				About <span className='text-theme-color'>Me</span>
			</h1>
			<h3 className='font-Nunito font-extrabold leading-10'>
				<span className='text-theme-color'>Full Stack</span> Developer
			</h3>
			<motion.p
			initial={{ x:100, opacity:0 }}
			whileInView={{ x:0, opacity:1 }}
			transition={{ duration:0.7, delay:0.1 }}
			className='font-Nunito font-bold capitalize text-justify text-lg lg:text-xl'>
			Hello! I'm ----------------, a passionate Full-Stack Developer with expertise in both frontend and backend technologies. I specialize in building responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React.js, while developing secure, scalable backend systems with PHP and Django. I’m also skilled in MySQL for efficient database management. My focus is on writing clean, maintainable code to deliver high-quality web applications that meet both client and user needs.
			</motion.p>
		</div>
    </div>
  )
}
