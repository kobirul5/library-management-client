import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';

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
    createBook: builder.mutation({
      query: (data) => ({
        url: `/api/books`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["books"]
    }),
    createBorrow: builder.mutation({
      query: (data) => (
        {

        url: `/api/borrow`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["books"]
    }),
    borrowSammary: builder.query({
      query: () => ({
        url: `/api/borrow`,
        method: "GET",
      }), 
      providesTags: ['books'],
    })
    
  }),
});

export const { useGetAllBooksQuery,
  useUpdateBooksMutation,
  useDeleteBooksMutation,
  useGetBookByIdQuery,
  useCreateBorrowMutation,
  useBorrowSammaryQuery,
  useCreateBookMutation,
} = apiSlice;
