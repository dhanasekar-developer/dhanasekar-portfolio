import React, {useRef} from 'react'
import { resumeData } from './Datas'
import { getDarkMode } from '../slices/darkModeSlice'
import { useSelector } from 'react-redux'

export default function Education() {

    const dark = useSelector(getDarkMode)
        const iconsRef = useRef({})
    
        const changeColor=(id,colorCode)=>{
            const hoverRef = iconsRef.current[id]
            hoverRef.style.color = colorCode
        }
    
  return (
    <div className='education font-Nunito flex flex-wrap gap-3'>
        {
            <div className='grid gap-5 grid-cols-4 max-1200:grid-cols-3 max-550:!grid-cols-2'>
                {
                    resumeData.skills.map((e,index)=>{
                        const {tag, logoColor, tagName,id} = e
                        return (
                        <div key={id} className={`bg-primary-one shadow-shadow_2 text-8xl max-1000:text-7xl rounded-md p-4 relative flex justify-center group skillIcons duration-50`} 
                        id={`div_${id}`}
                        ref={(e)=>iconsRef.current[id] = e}
                        onMouseEnter={() => changeColor(id,logoColor)}
                        onMouseLeave={() => changeColor(id, dark ? '#fff' : '#000')}
                        style={{ color : dark ? '#fff' : '#000' }}
                        >
                            <span className={`absolute text-lg -top-4 mx-auto font-Nunito font-bold bg-white text-black px-2 rounded-sm opacity-0 group-hover:!opacity-100 hover:!opacity-100 transition-all duration-500 shadow-shadow_1 max-1000:text-[15px] max-1000:leading-7`}>{tagName}</span>
                            <span className='duration-500'>{tag}</span>
                        </div>
                        );
                    })
                }
            </div>
        }
       
    </div>
  )
}
