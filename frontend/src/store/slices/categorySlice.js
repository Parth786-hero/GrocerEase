import {createSlice} from '@reduxjs/toolkit';
const categorySlice = createSlice({
    name : "categorySlice",
    initialState : [],
    reducers : {
        add(state , action){
            
            return action.payload;
            
        }
    }
});
export default categorySlice.reducer;
const {add} = categorySlice.actions;
export {add};