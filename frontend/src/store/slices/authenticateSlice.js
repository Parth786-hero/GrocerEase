import {createSlice} from '@reduxjs/toolkit';
const autheticateSlice = createSlice({
    name : "autheticateSlice",
    initialState : false,
    reducers : {
        change(state , action){
            return action.payload;
        }
    }
});
const {change} = autheticateSlice.actions;
export default autheticateSlice.reducer;
export {change};