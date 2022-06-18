import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    port:[],
}

export const portSlice = createSlice({
    name:"port",
    initialState,
    reducers:{
        setPortfolio:(state, {payload}) =>{
            state.port = payload;
        }
    }
})

export const { setPortfolio } = portSlice.actions;
export default portSlice.reducer;