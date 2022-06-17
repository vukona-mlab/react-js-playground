import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        subtract(state, action) {
            return state -= 1
        },
        add(state, action) {
            return state += 1
        }
    }
})

export const { subtract, add } = counterSlice.actions;
export default counterSlice.reducer;