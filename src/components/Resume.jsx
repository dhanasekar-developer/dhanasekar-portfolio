import React, { useState } from 'react'
import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'
import { getScreenWidth } from '../slices/screenWidthSlice'
import { useSelector } from 'react-redux'

export default function Resume({background}) {

	const width = useSelector(getScreenWidth)
	const [activeElement,setActiveElement] = useState([
		{'id':1,'title':'education','element':Education, 'active':true},
		{'id':2,'title':'skills','element':Skills, 'active':false},
		{'id':3,'title':'experience','element':Experience, 'active':false}
	])


	const showContent = (clickedE) =>{
		setActiveElement(activeElement.map((e)=>({
			...e,
			active:e.title == clickedE
		})))
	}
	
  return (
    <div className={`${background} text-secondary-one duration-700 min-h-dvh flex justify-center gap-10 2xl:gap-28`}>
		
		<div className='p-[20px]'>
			<h1 className={`${width<1000 ? "mt-2 mb-4" : "my-5"} font-Nunito font-extrabold text-theme-color flex justify-center`}>
				Resume
			</h1>
			<div className='flex gap-5 flex-col items-center justify-center'>
				<div className='flex gap-4 flex-wrap justify-center'>
					{
						activeElement.map((e)=>(
							<button key={e.id} onClick={()=>showContent(e.title)} className={`${e.active ? 'bg-theme-color text-primary-one' : 'bg-primary-one text-theme-color'} h-[40px] w-[200px] rounded-md font-extrabold text-[18px] border-2 border-theme-color capitalize duration-500`}>{e.title}</button>
						))
					}
				</div>
				<div className=''>
					{
						activeElement.map((e)=> {
							const {id, title, element:Element, active} = e
							if(active == true){
								return(
									<Element key={id}/>
								)
							}
						})
					}
				</div>
			</div>
			
		</div>
    </div>
  )
}
