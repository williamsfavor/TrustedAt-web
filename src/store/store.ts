import { configureStore } from "@reduxjs/toolkit";
import NavReducer from  "./navbar/nav";
import legalReducer from "./legal/legalSlice";
const store = configureStore({
    reducer:{
        NavReducer,
        legal:legalReducer
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;