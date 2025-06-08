import React, { forwardRef } from 'react'

const AlertBox = forwardRef((props,ref)=>{
    return (
        <section>
            <div ref={ref} className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-none p-4 bg-primary-two text-secondary-one w-[300px] h-auto hidden bg-red-700 text-white text-xl font-bold capitalize text-center align-middle font-Nunito rounded-md opacity-80`}>
                <div className='bg-red-500 size-[500px]'></div>
            </div>
        </section>
    )
 }) 

export default AlertBox