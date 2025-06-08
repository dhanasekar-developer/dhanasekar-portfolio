import  React, { createContext, useContext, useRef } from 'react'
import AlertBox from '../components/AlertBox'


const AlertboxContext = createContext(null)

export const AlertProvider = ({ children }) => {
    const alertboxRef = useRef(null)

    const showAlert = (message, type) =>{
        if(alertboxRef.current){
            alertboxRef.current.innerText = message
            alertboxRef.current.classList.remove('hidden')
            setTimeout(()=>{
                alertboxRef.current.classList.add('hidden')
            },1500)
        }
    }

    return (
        <AlertboxContext.Provider value={showAlert}>
            {children}
            <AlertBox ref={alertboxRef} />
        </AlertboxContext.Provider>
    )
}

export const useAlert = () =>{
    return useContext(AlertboxContext)
}