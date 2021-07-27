import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    test: "tesing"
}

const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {}
})

export default testSlice.reducer