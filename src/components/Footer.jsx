import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import resume from '../assets/project_1.png'
import { IoIosMail } from "react-icons/io";
import { motion } from 'framer-motion'

export default function Footer() {

    const icons = [
        {'tagName':'Linked In','tag':< FaLinkedin/>,'link':'https://www.linkedin.com/in/dhanasekar-developer'},
        {'tagName':'GitHub','tag':< FaGithub/>,'link':'https://github.com/dhanasekar-developer'},
        {'tagName':'Nelify','tag':< SiNetlify/>,'link':'#'},
    ]
    const currentYear = new Date().getFullYear();

  return (
    <div className={` bg-primary-five text-secondary-five mt-10 duration-700 shadow-shadow_8 rounded-md flex justify-center items-center py-5 font-Nunito max-800:mb-[80px] mb-[2px]`}>
        <div className='w-full px-2 flex justify-center items-center flex-col gap-3'>
            <div className='!flex gap-3'>
                {
                    icons.map((icon,index)=>{
                        const {tagName,tag,link} = icon;
                        const duration = 0.5+(index/10)
                        return(
                            <a href={link} key={index} className='bg-transparent  text-theme-color rounded-full p-[7px]  xsm:p-[10px] text-xl xsm:text-2xl transition-all duration-300 shadow-shadow-inset border-2 !border-theme-color hover:!-translate-y-2 hover:scale-110' title={tagName}
                            >
                                {tag}
                            </a>
                        )
                    })
                }
            </div>
            <motion.div
            initial={{ x:-100, opacity:0 }}
            whileInView={{ x:0, opacity:1 }}
            transition={{ duration:0.7, delay:0 }}
            >
                <span
                
                >
                    <a title='Click To Send Mail' href='mailto:dhanasekarsdeveloper@gmail.com' className={`text-secondary-five no-underline hover:!text-theme-color font-bold font-Nunito text-[13px] duration-300 flex items-center gap-2 uppercase`}>
                        <IoIosMail size={25} />
                        <span className='mt-[5px]'>dhanasekarsdeveloper@gmail.com</span>
                    </a>
                </span>
            </motion.div>
            <motion.div
            initial={{ x:100, opacity:0 }}
            whileInView={{ x:0, opacity:1 }}
            transition={{ duration:0.7, delay:0 }}
            >
                <span className='font-bold flex items-center gap-1 font-Nunito'><span className='text-xl'>&copy; </span>{currentYear} | Dhanasekar | All Rights Reserved</span>
            </motion.div>
        </div>
    </div>
  )
}
