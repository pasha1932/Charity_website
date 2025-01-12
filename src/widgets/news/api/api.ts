import { api } from '@/shared/api/api';


export type Author = {
  id: number,
  email: string,
  firstName: string,
  lastName: string,
  middleName: string,
  photoUrl: string
}
export type News = {
  id: number,
  author: Author,
  title: string,
  content: string,
  createTime: string,
  coverImageUrl: string,
}

export type NewsData = {
  title: string,
  content: string,
  id: string,
}

export type Page = {
  number: number,
  size: number
  totalElements: number,
  totalPages: number,
}

export type Data = {
  content: News[],
  page: Page,
}
export const newsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query<Data, { page: number; size: number }>({
      query: ({ page, size }) => `/public/news?page=${page}&size=${size}`,
    }),
    getNewsItem: build.query<News, { id: string | undefined }>({
      query: ({id}) => `/public/news/${id}`,
    }),
    createNews: build.mutation<News, FormData >({
      query: (formData) => ({
        url: '/admin/news',
        method: 'POST',
        body: formData,
      }),
    }),
    updateNewsText: build.mutation<any, NewsData >({
      query: (news) => ({
        url: `/admin/news/${news.id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    updateNewsCoverImage: build.mutation<any, { id: string; formData: FormData } >({
      query: ({ formData, id }) => ({
        url: `/admin/news/image/${id}`,
        method: 'PUT',
        body: formData,
      }),
    }),
  }),
});

export const { useGetNewsQuery, useCreateNewsMutation, useUpdateNewsTextMutation, useUpdateNewsCoverImageMutation, useGetNewsItemQuery } = newsApi;
export const {
  endpoints: {
    getNews,
    getNewsItem,
    createNews,
    updateNewsText,
    updateNewsCoverImage,
  },
} = newsApi;
export { api };

