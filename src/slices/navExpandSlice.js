import { createSlice } from "@reduxjs/toolkit";

const storedNavExpand = localStorage.getItem('navExpand')
const initialState = storedNavExpand ? JSON.parse(storedNavExpand) : true

const navExpandSlice = createSlice({
    name: 'navExpand',
    initialState,
    reducers:{
        updateExpand:(state,action)=>{
            localStorage.setItem('navExpand',!state)
            return !state
        } 
    }
})

export const getExpand = (state) => state.navExpand
export const { updateExpand } = navExpandSlice.actions

export default navExpandSlice.reducer