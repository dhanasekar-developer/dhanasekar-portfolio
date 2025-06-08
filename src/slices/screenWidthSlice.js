import { createSlice } from "@reduxjs/toolkit";

const initialState =  window.innerWidth

const screenWidthSlice = createSlice({
    name: 'screenWidth',
    initialState,
    reducers:{
        updateScreenWidth:(state,action)=> action.payload
    }
})

export const {updateScreenWidth} = screenWidthSlice.actions
export const getScreenWidth = (state) => state.screenWidth

export default screenWidthSlice.reducer