import React from 'react'
import { resumeData } from './Datas'
import { motion } from 'framer-motion'
import { getScreenWidth } from '../slices/screenWidthSlice';
import { useSelector } from 'react-redux';
const animation = (x_value) =>({
    hidden:{ x:x_value, opacity:0 },
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0, delay:0}
    }
})

export default function Education() {
	const width = useSelector(getScreenWidth)
  return (
    <div className='education font-Nunito flex flex-wrap justify-center max-w-[1000px] gap-4'>
        {
            resumeData.education.map((e,index)=>{
                const {id, title, content, year} = e
                const x_value = index%2 == 0 ? -100 : 100
                return(
                    <motion.div
                    variants={animation(x_value)}
                    initial='hidden'
                    whileInView='visible'
                    key={id} className={`bg-primary-two rounded-md p-4 flex flex-col ${width<550 ? 'w-[100%]' : 'w-[450px]'} shadow-shadow_2 duration-700`}>
                        <span className='text-theme-color text-[18px] capitalize font-extrabold leading-7 mb-2'>{title}</span>
                        <span className='text-secondary-one text-[16px] font-medium capitalize mb-2'>{content}</span>
                        <span className='text-secondary-one text-[16px] font-medium capitalize'>{year}</span>
                    </motion.div>
                )
            })
        }
        
    </div>
  )
}
