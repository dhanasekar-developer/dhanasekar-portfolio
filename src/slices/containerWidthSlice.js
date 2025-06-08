import { createSlice } from "@reduxjs/toolkit";

const initialState = 0

const containerWidthSlice = createSlice({
    name: 'containerWidth',
    initialState,
    reducers:{
        updateContainerWidth:(state,action) => action.payload
    }
})

export const {updateContainerWidth} = containerWidthSlice.actions
export const getContainerWidth = (state) => state.containerWidth

export default containerWidthSlice.reducer