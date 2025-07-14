import { createSlice } from "@reduxjs/toolkit";
import {Appearance} from 'react-native';


const initialState = {
    darkmode:Appearance.getColorScheme() == 'dark'
}

const darkModeReducer = createSlice({
    name:'darkmode',
    initialState,
    reducers:{
        setDarkMode:(state)=>{
            state.darkmode = true
            return state
        },
        setLightMode:(state)=>{
            state.darkmode = false
            return state
        },
        toggleDarkMode: (state) => {
            state.darkmode = !state.darkmode;
            return state
        }
    }
})

export const {setLightMode,setDarkMode,toggleDarkMode} = darkModeReducer.actions
export default darkModeReducer.reducer