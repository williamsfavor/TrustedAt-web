import { configureStore } from "@reduxjs/toolkit";
import NavReducer from  "./navbar/nav";

const store = configureStore({
    reducer:{
        NavReducer
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;