import { useContext,createContext,useRef } from "react";

const ScrollContext = createContext()

export const ScrollProvider = ({ children }) => {
    const scrollContainerRef = useRef(null)

    const scrollToSection = (sectionId) =>{

        if(sectionId && scrollContainerRef.current){
            const section = document.getElementById(sectionId);
            const element = document.getElementById('element');
            
            const marginTop = 80
            const scrollToY = section.getBoundingClientRect().top + scrollContainerRef.current.scrollTop - marginTop;
            scrollContainerRef.current.scrollTo({
                top:scrollToY,
                behavior:"smooth"
            })
            // console.log(section.getBoundingClientRect().top,',',scrollContainerRef.current.scrollTop)
            // console.log(scrollContainerRef.current)
        }
       
    }


  return (
    <ScrollContext.Provider value={{ scrollToSection,scrollContainerRef }}>
        {children}
    </ScrollContext.Provider>
  )
}

export const useScroll = () =>{
    return useContext(ScrollContext)
}