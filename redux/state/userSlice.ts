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

interface userState {
    user:userType | null,
}

const initialState:userState = {
    user:null,
}

const userReducer = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state, action: PayloadAction<userType>) => {
            state.user = action.payload;
        },
        clearUser:(state)=>{
            state.user = null
        }
    }
})

export const {setUser,clearUser} = userReducer.actions
export default userReducer