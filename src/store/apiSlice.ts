import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';

// Post type
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: 'https://library-management-two-gold.vercel.app' }),
   tagTypes: ['course'],
  endpoints: (builder) => ({
     getAllBooks: builder.query({
      query: () => ({
        url: `/api/books`,
        method: "GET",
      }),
      providesTags: ['course']
    }),
    
  }),
});

export const { useGetAllBooksQuery } = apiSlice;
