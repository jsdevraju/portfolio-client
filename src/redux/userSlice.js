import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token:"",
    admin:""
}

export const userSlice = createSlice({
    name:"admin",
    initialState,
    reducers:{
        login:(state, {payload}) =>{
            return { ...state, token:payload?.token, admin:payload?.adminInfo}
        }
    }
})

export const { login } = userSlice.actions;
export default userSlice.reducer;