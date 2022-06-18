import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    comment:[],
}

export const commentSlice = createSlice({
    name:"comment",
    initialState,
    reducers:{
        setComment:(state, {payload}) =>{
            state.comment = payload;
        }
    }
})

export const { setComment } = commentSlice.actions;
export default commentSlice.reducer;