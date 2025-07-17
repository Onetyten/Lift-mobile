import {combineReducers, configureStore} from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistReducer,persistStore,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from 'redux-persist'
import darkModeReducer from '@/redux/state/darkModeSlice'
import userReducer from './state/userSlice'

const rootReducer = combineReducers({
    darkmode:darkModeReducer,
    user:userReducer,
})

const persistConfig = {
    key:'root',
    version:1,
    storage:AsyncStorage,
    whitelist:['user','darkmode'],
}



const persistedReducer = persistReducer(persistConfig,rootReducer)

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