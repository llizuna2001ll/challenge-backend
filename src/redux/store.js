import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';  // Import the productSlice reducer

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
    },
});

export default store;
