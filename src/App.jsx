import React, { useEffect, useRef } from 'react'
import "./App.css"
import "./Global.css"
import Navigation from './components/Navigation'
import Header from './components/Header'
import { useSelector,useDispatch } from 'react-redux'
import { getDarkMode } from './slices/darkModeSlice'
import { getExpand } from './slices/navExpandSlice'
import { updateScreenWidth } from './slices/screenWidthSlice'
import { updateContainerWidth } from './slices/containerWidthSlice'
import { getContainerWidth } from './slices/containerWidthSlice'
import { navigations } from './components/Datas'
import debounce from 'lodash.debounce'
import { AlertProvider } from './context/AlertboxContext'
import { getTheme } from './slices/themeSlice'
import Elements from './components/Elements'
import { ScrollProvider } from './context/ScrollContext'

function App() {
    const dispatch = useDispatch()
    const dark = useSelector(getDarkMode)
    const expand = useSelector(getExpand)
    const containerRef = useRef(null)
    const containerWidth = useSelector(getContainerWidth)
    const theme = useSelector(getTheme)

    useEffect(()=>{

        const getWindowSize = () => {
            dispatch(updateScreenWidth(window.innerWidth))
        }
        window.addEventListener('resize', getWindowSize)
        const previousContainerWidth = containerWidth
        const resizeObserver = new ResizeObserver(debounce((entries)=>{
            if(entries[0]){
                const newContainerWidth = entries[0].contentRect.width
                if(previousContainerWidth !== newContainerWidth)
                dispatch(updateContainerWidth(newContainerWidth))
            }
        }))
        if(containerRef.current){
            resizeObserver.observe(containerRef.current)
        }
        return () =>{
            window.removeEventListener('resize', getWindowSize)
            resizeObserver.disconnect()
        }
    },[])

  return (
    <AlertProvider>
    <ScrollProvider>
        <section className={`${theme} grid min-801:grid-cols-[auto_1fr] p-[20px] font-Nunito duration-700 text-primary-one bg-primary-two ${dark ? 'dark' : 'light' } overflow-hidden max-h-[100dvh]`}>
            <div className="row-span-2">
                <Navigation />
            </div>
            <div>
                <Header />
            </div>
            <div>
                <Elements />
            </div>
            <div className='fixed bottom-0 w-full h-[20px] bg-primary-two'></div>
        </section>
    </ScrollProvider>
    </AlertProvider>
  )
}
export default App;