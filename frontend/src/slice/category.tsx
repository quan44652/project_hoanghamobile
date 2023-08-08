import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categoryApi = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
  }),
  tagTypes: ["category"],
  endpoints: (builder) => ({
    getCategories: builder.query<any, void>({
      query: (arg: void) => "/category",
      providesTags: ["category"],
    }),
    getCategory: builder.query({
      query: (id: any) => ({
        url: `/category/${id}`,
        method: "GET",
      }),
      providesTags: ["category"],
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryQuery } = categoryApi;
export const categoryReducer = categoryApi.reducer;
export default categoryApi;
