import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productApi = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
  }),
  tagTypes: ["product"],
  endpoints: (builder: any) => ({
    getProducts: builder.query({
      query: (arg: void) => "/products",
      providesTags: ["product"],
    }),
    getProduct: builder.query({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productApi;
export const productReducer = productApi.reducer;
export default productApi;
