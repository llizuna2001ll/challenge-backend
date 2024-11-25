import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        userId: 1,
        date: '2019-11-24',
        products: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.products.find(
                (product) => product.productId === action.payload.id
            );
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.products.push({ productId: action.payload.id, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const productIndex = state.products.findIndex(
                (product) => product.productId === action.payload.id
            );
            if (productIndex !== -1) {
                state.products.splice(productIndex, 1);
            }
        },
        decreaseQuantity: (state, action) => {
            const productIndex = state.products.findIndex(
                (product) => product.productId === action.payload.id
            );
            if (productIndex !== -1) {
                const product = state.products[productIndex];
                if (product.quantity > 1) {
                    product.quantity -= 1;
                } else {
                    state.products.splice(productIndex, 1);
                }
            }
        },
    },
});

export const { addToCart, removeFromCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
