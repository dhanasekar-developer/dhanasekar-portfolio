import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentNav } from '../slices/CurrentNavSlice';
import { getExpand, updateExpand } from '../slices/navExpandSlice';
import { navigations } from './Datas';
import { useScroll } from '../context/ScrollContext';

export default function Navigation() {

    const { scrollToSection } = useScroll()
    const { scrollContainerRef } = useScroll()

    const dispatch = useDispatch()
    const expand = useSelector(getExpand)
    const handleExpand = () => {
        dispatch(updateExpand())
    }

    const [activeLink, setActiveLink] = useState('home');

    const determineActiveSection = () =>{
        navigations.map((nav)=>{
            if(nav.title != 'Footer'){
                const section = document.getElementById(nav.toPath)
                if(section){
                    let rect = section.getBoundingClientRect();
                    if(rect.top<=120 && rect.bottom>=120){
                        setActiveLink((prev)=> prev != nav.toPath ? nav.toPath : prev)
                    }
                }
            }
        })
    }
    useEffect(()=>{
        const handleScroll=()=>{
            determineActiveSection()
        }
        if(scrollContainerRef.current){
            scrollContainerRef.current.addEventListener('scroll',handleScroll)

            return ()=>{ scrollContainerRef.current.removeEventListener('scroll', handleScroll) }
        }
    },[])

    useEffect(()=>{
        dispatch(setCurrentNav(activeLink))
    },[activeLink])

  return (
    <section>
        {/* Side Navigation */}
        <div className={`${expand ? 'w-[300px] max-1300:w-[250px]' : 'w-[90px]'} max-800:hidden h-screen sticky top-0 left-0 duration-500`}>
            <nav className='h-screen fixed top-[20px] left-[20px]'>
                <div className={`${expand ? 'w-[300px] max-1300:w-[250px]' : 'w-[90px]'} h-[calc(100vh-40px)] bg-theme-color  rounded-lg duration-500`}>
                    <ul className='m-0 p-0 relative h-full flex flex-col justify-between'>
                        <div>
                            <div className='flex items-center px-[17px] py-4 gap-[18px] overflow-hidden'>
                                <span className='inline-block text-theme-color bg-primary-one rounded-full px-[10px] py-[8px] pb-[6px] font-[900] text-[25px] duration-500'>DS</span>
                                <h2 className={`${expand ? 'w-auto' : 'w-0'} text-[28px] text-nowrap uppercase font-Sriracha font-bold transition-all !duration-500 text-primary-one m-0 p-0`}>my port</h2>
                            </div>
                            
                            <button className={`${expand ? 'rotate-180' : ''} size-[40px] text-5xl font-bold rounded-full bg-primary-one text-theme-color flex justify-center items-center absolute top-[75px] -right-[20px] shadow-shadow_3 duration-500 !z-[900]`} onClick={handleExpand}><MdOutlineKeyboardArrowRight /></button>
                            {
                                navigations.map((e)=>{
                                    const {id,title,toPath,icon} = e
                                    if(title != 'Footer'){
                                        return(
                                            <span
                                            key={id}
                                            onClick={() => {scrollToSection(toPath)}}
                                            className={`text-primary-one px-4 links decoration-transparent cursor-pointer block h-[60px] ${activeLink == toPath ? 'active' : '' }`} >
                                            <li className={`before:bg-primary-one text-[20px] font-extrabold font-Nunito flex gap-2 items-center duration-500 overflow-hidden`} >
                                                <span className={`mr-3`}>
                                                    {icon}
                                                </span>
                                                <span className={`${ expand ? 'w-auto' : 'w-0' }`}>
                                                    {title}
                                                </span>
                                            </li>
                                        </span>
                                        )
                                    }
                                })
                            }
                        </div>
                        
                        
                    </ul>
                </div>
            </nav>
        </div>
        {/* Bottom Navigation */}
        <div className={`hidden max-800:block bg-primary-two fixed bottom-0 left-0 w-[100vw] h-[90px] z-50 duration-700`}>
            <nav className='flex w-[calc(100vw-40px)] bg-theme-color h-[60px] rounded-md fixed bottom-[10px] left-[20px] z-40 px-[20px]'>
                <div className='w-[calc(100vw-130px)]'>
                    <div className='flex items-center justify-between w-[calc(100vw-150px)] mx-auto max-w-[350px] nav_lists'>
                    {
                        navigations.map((e)=>{
                            const {id,title,toPath,icon} = e
                            if(title != 'Footer'){
                                return(
                                    <span
                                        key={id}
                                        className={`bottomLinks text-primary-one decoration-transparent cursor-pointer relative ${activeLink == toPath ? 'active' : ''}`}
                                        onClick={()=>{scrollToSection(toPath)}} >
                                        <li className={`text-[17px] font-bold font-Nunito flex flex-col items-center duration-0 absolute top-2`} >
                                            <span className={`p-2 rounded-full inline-block z-50`}>
                                                {icon}
                                            </span>
                                            <span className={`text-primary-one bottom-0 -translate-y-[25px] z-50 opacity-0 duration-300`}>
                                                {title}
                                            </span>
                                        </li>
                                    </span>
                                )
                            }
                        })
                    }
                    </div>
                </div>
            </nav>
        </div>
    </section>
    
  )
}
