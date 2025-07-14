import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userType {
  _id: string;
  __v: number;
  carOwned: string[];
  createdAt: string;
  email: string;
  isRenter: boolean;
  lastLogin: string;
  name: string;
  profilePicture: string;
  totalSpent: number;
  updatedAt: string;
}

interface refreshTokenType{
    _id: string | null,
    createdAt: string | null,
    expiresAt: string | null,
    token: string | null,
}

interface userState {
    user?:userType | null,
    token?:string |null,
    refreshToken?:refreshTokenType | null
}

const initialState:userState = {
    user:null,
    token:null,
    refreshToken:null
}

const userReducer = createSlice({
    name:"userData",
    initialState,
    reducers:{
        setUser:(state,action:PayloadAction<userState>)=>{
            if (action.payload?.user !== undefined){
                state.user = action.payload?.user
            }
            if (action.payload?.token !== undefined){
                state.token = action.payload?.token
            }
            if (action.payload?.refreshToken !== undefined){
                state.refreshToken = action.payload?.refreshToken
            }
        },
        clearUser:(state)=>{
            state.user = null
            state.token = null
            state.refreshToken = null
        }
    }
})

export const {setUser,clearUser} = userReducer.actions
export default userReducer