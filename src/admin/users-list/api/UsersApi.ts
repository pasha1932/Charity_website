import { api } from '@/shared/api/api';


export type User = {
  firstName: string,
  middleName: string,
  lastName: string,
  position: string,
  avatarUrl: string,
}

export type Page = {
  number: number,
  size: number
  totalElements: number,
  totalPages: number,
}

export type Data = {
  content: User[],
  page: Page,
}
export const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<Data, { page: number; size: number }>({
      query: ({ page, size }) => `/public/users?page=${page}&size=${size}`,
    }),
    deleteUser: build.mutation<void, string>({
      query: (userId) => ({
        url: `/admin/users/${userId}`,
        method: 'DELETE'
      }),
    }),
  }),
});
export const {useGetUsersQuery, useDeleteUserMutation} = usersApi;

