import { logout } from '@/admin/login/lib/authSlice';
import { AppDispatch, RootState } from '@/app/appStore';
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  createApi,
} from '@reduxjs/toolkit/query/react';

// Створення базового запиту
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://backend-api.space/api',
  prepareHeaders: (headers, { getState, endpoint }) => {
    // Перелік endpoint, які не вимагають авторизації
    const skipAuthEndpoints = [
      'getNews',
      'getNewsItem',
      'getProjects',
      'getProjectsActive',
      'becameVolunteer',
      'createProject',
      'becamePartner',
      'register',
      'getPartners',
      'getPartner',
    ];

    // Перевіряємо, чи поточний endpoint вимагає авторизації
    if (!skipAuthEndpoints.includes(endpoint)) {
      const token =
        (getState() as RootState).auth.token || localStorage.getItem('token');

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
    }
    return headers;
  },
});

// Створення базового запиту з логікою перехоплення
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Обробка помилки 401
  if (result.error && result.error.status === 401) {
    const dispatch = api.dispatch as AppDispatch;

    // Виклик logout після помилки
    dispatch(logout());
  }

  return result;
};

// Створення API
export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, { email: string; password: string }>({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        body: userData,
      }),
    }),
    register: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: "/auth/registration",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});


export const { useLoginMutation, useRegisterMutation } =
  api