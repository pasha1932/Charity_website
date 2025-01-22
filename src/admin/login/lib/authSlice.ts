import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/app/appStore";
import { api } from "@/shared/api/api";

interface InitialState {
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: InitialState = {
  token: localStorage.getItem('token'), // Зчитуємо токен з localStorage
  isAuthenticated: !!localStorage.getItem('token'), // Якщо токен є, встановлюємо як автентифікованого
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token'); // Видаляємо токен з localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.login.matchFulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem('token', action.payload.token); // Зберігаємо токен у localStorage після успішного логіну
      });
  },
});

export const { logout } = slice.actions;
export default slice.reducer;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectToken = (state: RootState) =>
  state.auth.token;