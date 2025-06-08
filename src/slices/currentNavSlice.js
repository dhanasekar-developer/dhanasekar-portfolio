import { createSlice } from "@reduxjs/toolkit";

const initialState = 'home'

const currentNavSlice = createSlice({
    name:'currentNav',
    initialState,
    reducers:{
        setCurrentNav:(state,action)=> action.payload
    }

})

export const getCurrentNav = (state) => state.currentNav
export const {setCurrentNav} = currentNavSlice.actions
export default currentNavSlice.reducer