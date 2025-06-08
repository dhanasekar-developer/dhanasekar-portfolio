import { createSlice } from "@reduxjs/toolkit";

const storedTheme = localStorage.getItem('theme')

const initialState = storedTheme || 'theme-one'

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        updateTheme: (state,action) => {
            
            localStorage.setItem('theme',action.payload)
            return action.payload
        } 
    }
})

export const { updateTheme } = themeSlice.actions
export const getTheme = (state) => state.theme


export default themeSlice.reducer