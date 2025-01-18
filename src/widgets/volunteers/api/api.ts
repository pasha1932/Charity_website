import { api } from '@/shared/api/api';
export type Volunteer = {
  id: 0,
  firstName: string,
  lastName: string,
  middleName: string,
  phoneNumber: string,
  email: string,
  status: string,
  avatarUrl: string,
}
export type Page = {
  number: number,
  size: number
  totalElements: number,
  totalPages: number,
}

export type Data = {
  content: Volunteer[],
  page: Page,
}

export const newsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getActiveVolunteers: build.query<any, { page: number; size: number }>({
      query: ({ page, size }) => `/public/volunteers/active?page=${page}&size=${size}`,
    }),
    getPendingVolunteers: build.query<Data, { page: number; size: number }>({
      query: ({ page, size }) => `/public/volunteers/pending?page=${page}&size=${size}`,
    }),
    getRejectedVolunteers: build.query<Data, { page: number; size: number }>({
      query: ({ page, size }) => `/public/volunteers/rejected?page=${page}&size=${size}`,
    }),
    // getNewsItem: build.query<News, { id: string | undefined }>({
    //   query: ({id}) => `/public/news/${id}`,
    // }),
    createVolunteer: build.mutation<Volunteer, FormData >({
      query: (formData) => ({
        url: '/admin/volunteers',
        method: 'POST',
        body: formData,
      }),
    }),
    updateVolunteerStatus: build.mutation<any, { id: number, status: string }>({
      query: ({id, status}) => ({
        url: `/admin/volunteers/${id}`,
        method: 'PATCH',
        body: {status},
      }),
    }),
    becameVolunteer: build.mutation<any, FormData >({
      query: (formData) => ({
        url: `/public/volunteers`,
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useBecameVolunteerMutation, useUpdateVolunteerStatusMutation, useCreateVolunteerMutation, useGetActiveVolunteersQuery, useGetPendingVolunteersQuery, useGetRejectedVolunteersQuery } = newsApi;
export const {
  endpoints: {

  },
} = newsApi;
export { api };

