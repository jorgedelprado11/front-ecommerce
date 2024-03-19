import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/",
    mode: "cors",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/category",
    }),
    getProducts: builder.query({
      query: () => "/product",
    }),
    getProductsByCategory: builder.query({
      query: (categoria) => `/product/${categoria}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsByCategoryQuery, useGetCategoriesQuery } =
  productApi;
