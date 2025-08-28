import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';
import { get } from 'react-hook-form';

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
  // baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:5000' }),
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
      query: (updateBook) => ({
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
    }),
    getBookById: builder.query({
      query: (id) => ({
        url: `/api/books/${id}`,
        method: "GET",
      }),
    }),
    createBorrow: builder.mutation({
      query: (data) => (
        // console.log(borrowData, "borrowData------------------"),
        {

        url: `/api/borrow`,
        method: "POST",
        data,
      }),
    }),
    borrowSammary: builder.query({
      query: () => ({
        url: `/api/borrow`,
        method: "GET",
      }),
    })

  }),
});

export const { useGetAllBooksQuery,
  useUpdateBooksMutation,
  useDeleteBooksMutation,
  useGetBookByIdQuery,
  useCreateBorrowMutation
} = apiSlice;
