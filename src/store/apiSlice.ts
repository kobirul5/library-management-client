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
   tagTypes: ['books'],
  endpoints: (builder) => ({
     getAllBooks: builder.query({
      query: () => ({
        url: `/api/books`,
        method: "GET",
      }),
      providesTags: ['books'],
    }),
    updateBooks: builder.mutation({
      query: (updateBook ) => ({
        url: `/api/books/${updateBook?._id}`,
        method: 'PUT',
        data: updateBook
      }),
      invalidatesTags: ["books"],
    }),
    deleteBooks: builder.mutation({
      query: (id) => ({
        url: `/api/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["books"],
    })
  }),
});

export const { useGetAllBooksQuery, useUpdateBooksMutation, useDeleteBooksMutation } = apiSlice;
