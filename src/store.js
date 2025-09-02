// 1. Import configureStore from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlices";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice"

// 2. Create store with empty reducer for now
// (We’ll add slices like authSlice, productSlice later)
const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    order: orderReducer
  },
});

export default store;
