import { useRef, useEffect } from "react";
import { FaSun,FaGear } from "react-icons/fa6";
import { getCurrentNav } from '../slices/CurrentNavSlice';
import { useSelector } from 'react-redux';
import { getDarkMode } from '../slices/darkModeSlice';
import { useDispatch } from 'react-redux';
import { setDarkMode } from '../slices/darkModeSlice';
import { getContainerWidth } from '../slices/containerWidthSlice';
import { BsFillMoonStarsFill } from "react-icons/bs";

import Theme from "./Theme";

export default function Header() {

    const dispatch = useDispatch()
    const currentNav = useSelector(getCurrentNav)
    const dark = useSelector(getDarkMode)
    const containerWidth = useSelector(getContainerWidth)
    
    const themeContainer = useRef(null)
    const themeBtn = useRef(null)
    
    const hideAndShowTheme = () =>{
        if(themeContainer.current){
            themeContainer.current.classList.toggle('!right-[20px]')
        }
    }
    const handleDarkMode = () =>{
        dispatch(setDarkMode())
    }

    useEffect(()=>{
        const closeTheme = (e) => {
            if(!themeContainer.current.contains(e.target) && !themeBtn.current.contains(e.target)){
                themeContainer.current.classList.remove('!right-[20px]')
            }
        }
        document.addEventListener('click',closeTheme)
        return ()=>{
            document.removeEventListener('click',closeTheme)
        }
    },[])
  return (
    <section className="">
        <div className={`grid grid-cols-[1fr_auto] gap-3 items-center bg-theme-color px-[20px] h-[50px] rounded-md min-801:ml-[20px] mb-[10px] mt-[0px]`}>
            <div className="flex items-center justify-between">
                <div className='font-extrabold text-xl text-primary-one capitalize duration-300'>
                    {currentNav}
                </div>
                <div className=''>
                    <button className={`text-primary-one text-[22px] font-extrabold font-Nunito flex gap-2 items-center duration-500 !overflow-hidden outline-none focus:outline-none`} 
                    onClick={ () => handleDarkMode() }
                    >
                        {!dark ? (
                            <span className='flex gap-2 items-center'>
                                <span><FaSun /></span>
                                <span>Light Mode</span>
                            </span>
                            ) : (
                            <span className='flex gap-2 items-center'>
                                <span><BsFillMoonStarsFill /></span>
                                <span>Dark Mode</span>
                            </span>
                            )
                        }
                    </button>
                </div>
            </div>
            <div>
                <button ref={themeBtn} onClick={hideAndShowTheme} title="Theme" className="mt-2">
                    <FaGear size={25}/>
                </button>
            </div>
        </div>
        <Theme ref={themeContainer} hideAndShowTheme={hideAndShowTheme} />
    </section>
  )
}
