import {createSlice} from '@reduxjs/toolkit';
const cartPage = createSlice({
    name : "cart" , 
    initialState : false,
    reducers : {
        show(state , action){
            return action.payload;
        },
        hide(state , action){
            return action.payload;
        }
    }
});
export default cartPage.reducer;
export const {show , hide} = cartPage.actions;