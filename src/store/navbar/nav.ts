import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    links:[],
}


const navSLice = createSlice({
    name:"navState",
    initialState,
    reducers:{

    }

})


export const {} = navSLice.actions;
export default navSLice.reducer;