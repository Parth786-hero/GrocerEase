import {configureStore} from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice';
import switchSlice from './slices/switchSlice';
import authenticateSlice from './slices/authenticateSlice';
import productSlice from './slices/productSlice';
import cartPage from './slices/cartPage';
const store = configureStore({
    reducer : {
        category : categoryReducer,
        switch : switchSlice,
        authenticate : authenticateSlice,
        product : productSlice,
        cartPage 
    }
});
export default store;