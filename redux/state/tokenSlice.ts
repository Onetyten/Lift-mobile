import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface tokenState {
    token?:string |null,
}

const initialState:tokenState = {
    token:null,
}

const tokenReducer = createSlice({
    name:'token',
    initialState,
    reducers:{
        setToken:(state,action:PayloadAction<string|null>)=>{
            state.token = action.payload
        },
        clearToken:(state)=>{
            state.token = null
        }
    }
})

export const {setToken,clearToken} = tokenReducer.actions
export default tokenReducer.reducer