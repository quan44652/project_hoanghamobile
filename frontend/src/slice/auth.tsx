import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (user) => ({
        url: "/signup",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["user"],
    }),
    signin: builder.mutation({
      query: (user) => ({
        url: "/signin",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useSigninMutation, useSignupMutation } = authApi;
export const authReducer = authApi.reducer;
export default authApi;
