import {createSlice} from '@reduxjs/toolkit';
const switchSlice = createSlice({
    name : "switch",
    initialState : false,
    reducers : {
        triggerAccount(state , action){
            return action.payload;
        }
    }
});
export const {triggerAccount} = switchSlice.actions;
export default switchSlice.reducer;