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
        },
        setLightMode:(state)=>{
            state.darkmode = false
        },
        toggleDarkMode: (state) => {
            state.darkmode = !state.darkmode;
        }
    }
})

export const {setLightMode,setDarkMode,toggleDarkMode} = darkModeReducer.actions
export default darkModeReducer.reducer