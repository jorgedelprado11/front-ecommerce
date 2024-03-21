import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./services/products/productsAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
import productsSlice from "./services/products/productsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [productApi.reducerPath]: productApi.reducer,
      products: productsSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware),
  });
};

setupListeners(makeStore);
