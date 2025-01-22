// import { api } from "@/shared/api/api";


// // export const authApi = api.injectEndpoints({
// //   endpoints: (builder) => ({
// //     login: builder.mutation<{ token: string }, { email: string; password: string }>({
// //       query: (userData) => ({
// //         url: "/auth/login",
// //         method: "POST",
// //         body: userData,
// //       }),
// //     }),
// //     register: builder.mutation<any, FormData>({
// //       query: (formData) => ({
// //         url: "/auth/registration",
// //         method: "POST",
// //         body: formData,
// //       }),
// //     }),
// //     // register: builder.mutation<ResponseLoginData, UserData>({
// //     //   query: (userData) => ({
// //     //     url: "/user/register",
// //     //     method: "POST",
// //     //     body: userData,
// //     //   }),
// //     // }),
// //   }),
// // });

// export const { useLoginMutation, useRegisterMutation } =
//   authApi;

// export const {
//   endpoints: { login },
// } = authApi;