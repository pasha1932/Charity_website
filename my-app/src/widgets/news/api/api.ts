import { api } from '@/shared/api/api';

export const newsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query<{ data: any[] }, { page: number; size: number }>({
      query: ({ page, size }) => `/public/news?page=${page}&size=${size}`,
    }),
    createNews: build.mutation<any, { title: string; content: string; date: string }>({
      query: (body) => ({
        url: '/admin/news',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetNewsQuery, useCreateNewsMutation } = newsApi;
