import { createReducer, createSlice } from "@reduxjs/toolkit";
import {
  useGetProductsQuery,
  useGetProductsByNameQuery,
  useGetProductsByCategoryQuery,
  useGetCategoriesQuery,
} from "./productsAPI";
import axios from "axios";

const initialState = {
  page: 0,
  products: [],
  categories: [],
  isLoading: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProucts: (state) => {
      return async (dispatch) => {
        const { data } = await axios(`http://127.0.0.1:8000/productos`);
        state.products = data;
      };
    },
    getProuctsByCategory: (state, action) => {
      const { data } = useGetProductsByCategoryQuery(action.payload);
      state.products = data;
    },
    getProuctsByName: (state, action) => {
      const { data } = useGetProductsByNameQuery(action.payload);
      state.products = data;
    },
    getCategories: (state) => {
      const { data: categories } = useGetCategoriesQuery();
      state.categories = categories;
    },
  },
});

export const {
  getAllProucts,
  getCategories,
  getProuctsByCategory,
  getProuctsByName,
} = productsSlice.actions;

export default productsSlice.reducer;
