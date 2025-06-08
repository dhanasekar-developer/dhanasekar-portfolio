import React, { forwardRef } from 'react'
import { themeData } from "./Datas";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { updateTheme } from "../slices/themeSlice";
import { getDarkMode } from '../slices/darkModeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme } from "../slices/themeSlice";
const Theme = forwardRef(({hideAndShowTheme},ref) => {
    const dark = useSelector(getDarkMode)
    const theme = useSelector(getTheme)
    const dispatch = useDispatch()

    const changeTheme = (theme) => {
        dispatch(updateTheme(theme))
    }

  return (
    <div ref={ref} className={`bg-primary-three shadow-shadow_8 h-auto w-[250px] fixed top-[100px] rounded-md py-[10px] px-[20px] duration-700 -right-[300px] ${ dark ? 'border-2 border-gray-500' : '' } `}>
        <div>
            <span className="flex justify-between items-center text-secondary-one mb-3">
                <span className="text-xl font-extrabold capitalize inline-block">theme</span>
                <button className="p-2" onClick={hideAndShowTheme}><MdKeyboardDoubleArrowRight  size={22} /></button>
            </span>
            
            <div className="grid grid-cols-5 gap-3">
                {themeData.map((e)=>{
                    const {id,title,color} = e
                    return(
                        <div key={id} className="flex flex-col justify-center items-center gap-2">
                            <span className={`inline-block size-[5px] rounded-full ${theme == title ? 'bg-green-500' : 'bg-primary-one' } `}></span>
                            <button onClick={()=>changeTheme(title)} className={`border-[3px] rounded-md size-7`} style={{background:color}}></button>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
})


export default Theme;