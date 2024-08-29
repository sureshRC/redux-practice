import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: "post",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPost: builder.query({
      // above .query() for GET and .mutation for POST, PUT, DELETE requests
        query: ()=>({
            url:"posts",
            method:"GET",
        }),
      
    }),

    addPost: builder.mutation({

          query: (data)=>({
              url:"posts",
              method:"POST",
              body:data
          }),
        
      }),

      getUser: builder.query({
          query: ()=>({
              url:"users",
              method:"GET",
          }),
        
      }),
  
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useGetPostQuery, useAddPostMutation, useGetUserQuery } = postApi;
