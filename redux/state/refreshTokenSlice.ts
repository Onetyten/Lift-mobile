import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface refreshTokenType{
    _id: string | null,
    createdAt: string | null,
    expiresAt: string | null,
    token: string | null,
}

interface refreshTokenState {
    refreshToken:refreshTokenType | null
}

const initialState:refreshTokenState = {
    refreshToken:null
}

const refreshTokenReducer = createSlice({
    name:"refreshToken",
    initialState,
    reducers:{
        setRefreshToken:(state, action: PayloadAction<refreshTokenType>) => {
            state.refreshToken = action.payload;
        },
        clearRefreshToken:(state)=>{
            state.refreshToken = null
        }
    }
})

export const {setRefreshToken,clearRefreshToken} = refreshTokenReducer.actions
export default refreshTokenReducer