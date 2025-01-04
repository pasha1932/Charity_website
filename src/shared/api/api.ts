import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api', // Унікальний ідентифікатор API в Redux Store
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://backend-api.space/api', // URL вашого Swagger API
  }),
  endpoints: () => ({}),
});

export default api;