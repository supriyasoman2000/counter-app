import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const store = configureStore({
    reducer:{
        //kure reducer varunna kond thanne its should be in key-value pair
        counter:counterSlice

    }
})