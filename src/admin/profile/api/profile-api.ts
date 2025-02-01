import { api } from '@/shared/api/api';

export type User = {
  firstName:	string;
  middleName:	string;
  lastName:	string;
  position:	string;
  email:	string;
}
export const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    updateUserContent: build.mutation<any, any >({
      query: (user) => ({
        url: `/admin/users`,
        method: 'PUT',
        body: user,
      }),
    }),
    updateUserCoverImage: build.mutation<any, { formData: FormData } >({
      query: ({ formData }) => ({
        url: `/admin/users/image`,
        method: 'PUT',
        body: formData,
      }),
    }),
  }),
});

export const { useUpdateUserContentMutation, useUpdateUserCoverImageMutation } = usersApi;