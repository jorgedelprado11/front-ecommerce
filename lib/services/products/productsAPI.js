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
    getProductsByName: builder.query({
      query: (nombre) => `/product/search?nombre=${nombre}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetCategoriesQuery,
  useGetProductsByNameQuery,
} = productApi;
