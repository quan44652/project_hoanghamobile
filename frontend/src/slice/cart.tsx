import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cartApi = createApi({
  reducerPath: "cart",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
  }),
  tagTypes: ["cart"],
  endpoints: (builder) => ({
    getCart: builder.query({
      query: (arg: void) => "cart",
      providesTags: ["cart"],
    }),

    getCartByUser: builder.query({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "GET",
      }),
      providesTags: ["cart"],
    }),

    addToCart: builder.mutation({
      query: (cart) => ({
        url: "cart",
        method: "POST",
        body: cart,
      }),
      invalidatesTags: ["cart"],
    }),
    removeToCart: builder.mutation({
      query: (id) => ({
        url: `cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useRemoveToCartMutation,
  useGetCartQuery,
  useGetCartByUserQuery,
} = cartApi;
export const cartReducer = cartApi.reducer;
export default cartApi;
