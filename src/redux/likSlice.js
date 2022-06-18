import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    like:[],
}

export const likeSlice = createSlice({
    name:"like",
    initialState,
    reducers:{
        setLike:(state, {payload}) =>{
            state.like = payload;
        }
    }
})

export const { setLike } = likeSlice.actions;
export default likeSlice.reducer;