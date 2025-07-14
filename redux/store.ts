import {combineReducers, configureStore} from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistReducer,persistStore,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from 'redux-persist'
import darkModeReducer from '@/redux/state/darkModeSlice'
import userReducer from './state/userSlice'



const persistConfig = {
    key:'root',
    version:1,
    storage:AsyncStorage,
    whitelist:['userData'],
}

const reducer = combineReducers({
    darkmode:darkModeReducer,
    userData:userReducer
})


const persistedReducer = persistReducer(persistConfig,reducer)

const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[FLUSH,REGISTER,REHYDRATE,PERSIST,PAUSE,PURGE],
        },
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store