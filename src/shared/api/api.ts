import { RootState } from '@/app/appStore';
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';



// export const api = createApi({
//   reducerPath: 'api', // Унікальний ідентифікатор API в Redux Store
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://backend-api.space/api', // URL вашого Swagger API
//     prepareHeaders: (headers, { getState }) => {
//       const token = (getState() as RootState).auth.token;
//       if (token) {
//         headers.set('Authorization', `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     login: builder.mutation<{ token: string }, { email: string; password: string }>({
//       query: (credentials) => ({
//         url: 'auth/login',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//   }),
// });

// export const { useLoginMutation } = api;
// export default api;

const baseQuery = fetchBaseQuery({
  baseUrl: "https://backend-api.space/api",
  prepareHeaders: (headers, { getState, endpoint }) => {
    // Перевірка, чи потрібна авторизація
    const skipAuthEndpoints = ["getNews", "getNewsItem", "getProjects", "getProjectsActive"]; // Перелік endpoint, які не вимагають авторизації
    if (!skipAuthEndpoints.includes(endpoint)) {
      const token =
        (getState() as RootState).auth.token ||
        localStorage.getItem("token");
  
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
    }
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});