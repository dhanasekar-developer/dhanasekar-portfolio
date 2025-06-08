import { configureStore } from "@reduxjs/toolkit";
import currentNavReducer from "../slices/CurrentNavSlice";
import darkModeReducer from "../slices/darkModeSlice";
import navExpandReducer from "../slices/navExpandSlice";
import screenWidthReducer from "../slices/screenWidthSlice";
import containerWidthReducer from "../slices/containerWidthSlice";
import themeReducer from "../slices/themeSlice";


const store = configureStore({
    reducer:{
        currentNav: currentNavReducer,
        darkMode: darkModeReducer,
        navExpand: navExpandReducer,
        screenWidth: screenWidthReducer,
        containerWidth: containerWidthReducer,
        theme: themeReducer, 
    }
})

export default store;