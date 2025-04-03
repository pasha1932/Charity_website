import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/appStore";
import { api } from "@/shared/api/api";

interface InitialState {
  token: string | null;
  isAuthenticated: boolean;
  isSuperAdmin: boolean | null;
}

const initialState: InitialState = {
  token: localStorage.getItem('token'), // Зчитуємо токен з localStorage
  isAuthenticated: !!localStorage.getItem('token'), // Якщо токен є, встановлюємо як автентифікованого
  isSuperAdmin: !!localStorage.getItem('isSuperAdmin'),
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.isSuperAdmin = false;
      localStorage.removeItem('isSuperAdmin');
      localStorage.removeItem('token'); // Видаляємо токен з localStorage
    },
    setSuperAdmin: (state, action: PayloadAction<string>) => {
      action.payload === 'second_super_admin@gmail.com' ? localStorage.setItem('isSuperAdmin', 'yes') : localStorage.removeItem('isSuperAdmin');
      state.isSuperAdmin = !!localStorage.getItem('isSuperAdmin');
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.login.matchFulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.isSuperAdmin = !!localStorage.getItem('isSuperAdmin');
        localStorage.setItem('token', action.payload.token); // Зберігаємо токен у localStorage після успішного логіну
      });
  },
});

export const { logout, setSuperAdmin } = slice.actions;
export default slice.reducer;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectToken = (state: RootState) =>
  state.auth.token;