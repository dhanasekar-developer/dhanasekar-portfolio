import React from 'react'
import { navigations } from './Datas'
import { useScroll } from '../context/ScrollContext'


export default function Elements() {

  const { scrollContainerRef } = useScroll()

  return (
    <div id='element' ref={scrollContainerRef} className='max-h-[90dvh] overflow-y-auto overflow-x-hidden'>
        {
        navigations.map((e)=>{
            const {id,title,toPath,element:Element} = e
            const background = id%2 == 0 ? 'bg-primary-three' : 'bg-primary-two'
            return(
                <div className='min-801:ml-[20px]' id={toPath} name={toPath} key={id}>
                    <Element background={background} />
                </div>
            )
        })
        }
    </div>
  )
}
