import React from 'react'
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { IoIosDocument } from "react-icons/io";
import resume from '../assets/project_1.png'
import { getScreenWidth } from '../slices/screenWidthSlice';
import { useSelector } from 'react-redux'
import { motion } from "framer-motion"


export default function Home({background}) {
    const width = useSelector(getScreenWidth)
    
    const icons = [
        {'tagName':'Linked In','tag':< FaLinkedin/>,'link':'https://www.linkedin.com/in/dhanasekar-developer'},
        {'tagName':'GitHub','tag':< FaGithub/>,'link':'https://github.com/dhanasekar-developer'},
        {'tagName':'Nelify','tag':< SiNetlify/>,'link':'#'},
    ]

    return (
        <div className={`${background} text-secondary-one duration-700 mt-[50px] min-h-[calc(100dvh-90px)] max-800:min-h-[calc(100dvh-160px)] py-4 px-[min(20px,2%)] font-Nunito flex flex-wrap justify-center items-center gap-10 max-1100:flex-col-reverse`}>
            <motion.div
            initial={{ x:-100, opacity:0 }}
            animate={{ x:0, opacity:1 }}
            transition={{ duration:0.5, delay:0.2 }}
            className={`${ width<1600 ? width<1400 ? width<1200 ? width<1100 ? width<1000 ? 'max-w-[100%]' : 'max-w-[90%]' : 'max-w-[400px]' : 'max-w-[500px]' : 'max-w-[600px]' : 'max-w-[800px]' } `}
            >
                <h1 className='font-extrabold 2xl:text-6xl xl:text-5xl lg:4xl'>
                    Hi
                </h1>
                <h2 className='font-extrabold 2xl:text-5xl xl:text-4xl lg:3xl md:2xl'>
                    i'm <span className='text-theme-color'>------------</span>
                </h2>
                <h2  className='font-extrabold 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl text-xl'>
                    <span className='text-theme-color'>And i'm a </span>
                    <ReactTyped 
                    strings = {['Full Stack Developer'/*,'React js Developer', 'Python Developer', 'Django Developer', 'PHP Developer'*/]}
                    typeSpeed = {120}
                    backSpeed = {100}
                    loop
                    />
                </h2>
                
                <p className={`font-bold capitalize text-justify 2xl:text-xl xl:text-xl lg:text-lg md:text-base sm:text-base text-base mb-4`}>
                    i have strong foundation in both front-end and back-end technologies. With a focus on delivering clean, efficient, and scalable code, I specialize in building dynamic web applications that provide seamless user experiences.
                </p>
                <div className='flex justify-between items-center xxxsm:flex-col xxxsm:gap-4 xxsm:!flex-row'>
                    <div className='!flex gap-3'>
                        {
                            icons.map((icon,index)=>{
                                const {tagName,tag,link} = icon;
                                return(
                                    <a href={link} key={index} className='bg-transparent  text-theme-color rounded-full p-[7px]  xsm:p-[10px] text-xl xsm:text-3xl transition-all duration-300 shadow-shadow-inset border-2 border-theme-color hover:-translate-y-2 hover:scale-105' title={tagName}>{tag}</a>
                                )
                            })
                        }
                    </div>
                    <div>
                        <a href={resume} download="Dhanasekar's CV.png" className={`text-primary-one !bg-theme-color no-underline !font-extrabold !font-Nunito !flex items-center justify-center gap-2 rounded-md px-3 xsm:px-4 py-2 text-base xsm:text-lg transition-all duration-500 hover:!bg-transparent hover:!text-theme-color border-2 border-theme-color`}>
                            <span>Download CV</span><IoIosDocument className='text-2xl' />
                        </a>
                    </div>
                </div>
            </motion.div>
            <motion.div 
            initial={{x:100, opacity:0}}
            animate={{ x:0, opacity:1 }}
            transition={{ duration:0.5, delay:0.2 }}
            className=''
            >
                <div className={` bg-theme-color rounded-full size-80 max-1400:size-64 `}></div>
            </motion.div>
            
        </div>
    )
}
