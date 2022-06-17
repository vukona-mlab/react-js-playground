import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducers'
import counterReducer from "./reducers/counterReducer";
export const store = configureStore({
    reducer: {
        budget: reducer,
        counter: counterReducer
    }
})