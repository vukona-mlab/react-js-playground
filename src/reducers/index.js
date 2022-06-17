import { createSlice } from "@reduxjs/toolkit";
const budgetSlice = createSlice({
    name: 'budget',
    initialState: [],
    reducers: {
        itemAdded(state, action) {
            return state.push(...action.payload)
    
        },
        itemsAdded(state, action) {
            return state = action.payload
        },
        getItems(state, action) {
            return state
        },
        removeItem(state, action) {
            state.splice(action.payload, 1);
        }
    }
})
console.log(budgetSlice);
// export const { itemAdded } = 
export const { itemAdded, itemsAdded, getItems, removeItem } = budgetSlice.actions;
export default budgetSlice.reducer