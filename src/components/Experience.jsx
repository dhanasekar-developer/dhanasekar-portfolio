import React from 'react'
import { resumeData } from './Datas'
import { motion } from 'framer-motion'
import { getScreenWidth } from '../slices/screenWidthSlice';
import { useSelector } from 'react-redux';

export default function Experience() {

    const width = useSelector(getScreenWidth)
    const animation = (x_value) =>({
        hidden:{ x:x_value, opacity:0 },
        visible:{
            x:0,
            opacity:1,
            transition:{duration:0.2, delay:0}
        }
    })

  return (
    <div className='education font-Nunito flex flex-wrap gap-3 justify-center'>
        {
            resumeData.experience.map((e,index)=>{
                const x_value = index%2 == 0 ? -100 : 100
                const {id, title, designation, company, content} = e
                return(
                    <motion.div
                    variants={animation(x_value)}
                    initial='hidden'
                    whileInView='visible'
                    key={id} className={`bg-primary-two rounded-md p-4 flex flex-col ${width<550 ? 'w-[100%]' : 'w-[450px]'} duration-700 shadow-shadow_2`}>
                        <span className='text-theme-color text-[20px] capitalize font-extrabold leading-7 mb-2'>{title}</span>
                        <span className='text-secondary-one text-[17px] font-extrabold capitalize mb-2'>Company : {company}</span>
                        <span className='text-secondary-one text-[17px] font-extrabold capitalize mb-2'>Designation : {designation}</span>
                        <span className='text-secondary-one text-[16px] font-medium capitalize text-justify'>{content}</span>
                    </motion.div>
                )
            })
        }
       
    </div>
  )
}
