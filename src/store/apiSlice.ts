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
  baseQuery: axiosBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => ({ url: 'posts', method: 'get' }),
    }),
    getPostById: builder.query<Post, number>({
      query: (id) => ({ url: `posts/${id}`, method: 'get' }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = apiSlice;
