import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../Slices/CounterSlice"
import userReducer from "../Slices/UserSlice";

export const store = configureStore({ 
    reducer: {
        counter:counterReducer,
        MyUser:userReducer
    } });