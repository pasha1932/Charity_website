import { api } from '@/shared/api/api';


export type EmailData = {
  email: string,
  roleName: string;
}
export type AllowedEmail = {
  id: number;
  email: string,
  roleName: string;
  createdAt: '';
}
export const allowedEmailApi = api.injectEndpoints({
  endpoints: (build) => ({
    getEmail: build.query<any, { page: number; size: number }>({
      query: ({ page, size }) => `/admin/allowed_emails?page=${page}&size=${size}`,
    }),

    createAllowedEmail: build.mutation<any, EmailData >({
      query: (formData) => ({
        url: '/admin/allowed_emails',
        method: 'POST',
        body: formData,
      }),
    }),
    deleteEmail: build.mutation<void, string>({
      query: (emailId) => ({
        url: `/admin/news/${emailId}`,
        method: 'DELETE'
      }),
    }),
  }),
});

export const { useDeleteEmailMutation, useCreateAllowedEmailMutation, useGetEmailQuery} = allowedEmailApi;