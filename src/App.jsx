import { useEffect, useRef } from 'react';
import "./App.css";
import "./Global.css";
import Navigation from './components/Navigation';
import Header from './components/Header';
import { useSelector,useDispatch } from 'react-redux';
import { getDarkMode } from './slices/darkModeSlice';
import { getExpand } from './slices/navExpandSlice';
import { updateScreenWidth } from './slices/screenWidthSlice';
import { updateContainerWidth } from './slices/containerWidthSlice';
import { getContainerWidth } from './slices/containerWidthSlice';
import debounce from 'lodash.debounce';
import { AlertProvider } from './context/AlertContext';
import { getTheme } from './slices/themeSlice';
import Elements from './components/Elements';
import { ScrollProvider } from './context/ScrollContext';

function App() {
    const dispatch = useDispatch()
    const dark = useSelector(getDarkMode)
    const containerRef = useRef(null)
    const containerWidth = useSelector(getContainerWidth)
    const theme = useSelector(getTheme)
    const prevWidthRef = useRef(containerWidth)

    useEffect(()=>{

        const getWindowSize = () => {
            dispatch(updateScreenWidth(window.innerWidth))
        }
        window.addEventListener('resize', getWindowSize)
        const resizeObserver = new ResizeObserver(debounce((entries)=>{
            if(entries[0]){
                const newWidth = entries[0].contentRect.width
                if(prevWidthRef.current !== newWidth)
                dispatch(updateContainerWidth(newWidth))
                prevWidthRef.current = newWidth
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
        <section className={`${theme} grid min-801:grid-cols-[auto_1fr] p-[20px] font-Nunito duration-700 text-primary-one bg-primary-two ${dark ? 'dark' : 'light' } overflow-hidden max-h-[100dvh]`}>
            <ScrollProvider>
                <AlertProvider>
                    <div className="row-span-2">
                        <Navigation />
                    </div>
                    <div>
                        <Header />
                    </div>
                    <div>
                        <Elements />
                    </div>
                    <div className='fixed bottom-0 w-full h-[20px] bg-primary-two duration-700'></div>
                </AlertProvider>
            </ScrollProvider>
        </section>
  )
}
export default App;