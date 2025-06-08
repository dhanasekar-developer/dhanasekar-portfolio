import { createSlice } from "@reduxjs/toolkit";

const storedDark = localStorage.getItem('dark') 

const initialState = storedDark ? JSON.parse(storedDark) : false

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers:{
        setDarkMode:(state,action)=>{
            localStorage.setItem('dark', !state)
            return !state
        }
    }
})

export const { setDarkMode } = darkModeSlice.actions
export const getDarkMode = (state) => state.darkMode

export default darkModeSlice.reducer