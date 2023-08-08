import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const checkoutApi = createApi({
  reducerPath: "checkout",
  tagTypes: ["checkout"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
  }),
  endpoints: (builder) => ({
    getCheckout: builder.query({
      query: (arg: void) => "/checkout",
      providesTags: ["checkout"],
    }),
    getCheckoutByUser: builder.query({
      query: (id) => ({
        url: `/checkout/${id}`,
        method: "GET",
      }),
      providesTags: ["checkout"],
    }),
    createCheckout: builder.mutation({
      query: (data: any) => ({
        url: "/checkout",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["checkout"],
    }),
    statusCheckout: builder.mutation({
      query: (data) => ({
        url: `/checkout/${data.id}`,
        method: "POST",
        body: { status: data.status },
      }),
      invalidatesTags: ["checkout"],
    }),
  }),
});

export const {
  useCreateCheckoutMutation,
  useGetCheckoutQuery,
  useStatusCheckoutMutation,
  useGetCheckoutByUserQuery,
} = checkoutApi;
export const checkoutReducer = checkoutApi.reducer;
export default checkoutApi;
