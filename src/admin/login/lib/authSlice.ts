// import { createSlice } from '@reduxjs/toolkit';

// interface AuthState {
//   isAuthenticated: boolean;
//   token: string | null;
// }

// const initialState: AuthState = {
//   token: localStorage.getItem('authToken'), // Ініціалізація токена з localStorage
//   isAuthenticated: !!localStorage.getItem('authToken'), // Якщо токен є, встановлюємо як автентифікованого
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.isAuthenticated = true;
//       state.token = action.payload;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.token = null;
//       localStorage.removeItem('authToken');
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./auth";
import { RootState } from "@/app/appStore";

interface InitialState {
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: InitialState = {
  token: null,
  isAuthenticated: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null,
      state.isAuthenticated = false,
      localStorage.removeItem('token')
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
  },
});

export const { logout } = slice.actions;
export default slice.reducer;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectToken = (state: RootState) =>
  state.auth.token;