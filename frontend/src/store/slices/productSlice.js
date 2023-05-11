import {createSlice} from '@reduxjs/toolkit';
const productSlice = createSlice({
    name : "product",
    initialState : [],
    reducers : {
        add(state , action){
            state.push(action.payload);
        },
        remove(state , action){
            state.pop();
        }
    }
});
export default productSlice.reducer;
export const {add , remove} = productSlice.actions