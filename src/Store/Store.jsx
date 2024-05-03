import { configureStore } from "@reduxjs/toolkit";
import { CardSlice } from "./Reducers/CardSlice";
import cardreducer from "./Reducers/CardSlice";

export const store =configureStore({
    reducer:{
        card: cardreducer,
    },
})