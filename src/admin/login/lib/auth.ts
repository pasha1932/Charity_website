import { api } from "@/shared/api/api";


export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, { email: string; password: string }>({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        body: userData,
      }),
    }),
    // register: builder.mutation<ResponseLoginData, UserData>({
    //   query: (userData) => ({
    //     url: "/user/register",
    //     method: "POST",
    //     body: userData,
    //   }),
    // }),
  }),
});

export const { useLoginMutation } =
  authApi;

export const {
  endpoints: { login },
} = authApi;