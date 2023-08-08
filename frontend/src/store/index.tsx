import { configureStore } from "@reduxjs/toolkit";
import productApi, { productReducer } from "../slice/product";
import categoryApi, { categoryReducer } from "../slice/category";
import authApi, { authReducer } from "../slice/auth";
import cartApi, { cartReducer } from "../slice/cart";
import checkoutApi, { checkoutReducer } from "../slice/checkout";

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productReducer,
    [categoryApi.reducerPath]: categoryReducer,
    [authApi.reducerPath]: authReducer,
    [cartApi.reducerPath]: cartReducer,
    [checkoutApi.reducerPath]: checkoutReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      categoryApi.middleware,
      authApi.middleware,
      cartApi.middleware,
      checkoutApi.middleware
    ),
});

export default store;
