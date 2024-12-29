import { configureStore } from '@reduxjs/toolkit';
import { api } from '@/shared/api/api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // Додаємо reducer RTK Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Додаємо middleware RTK Query
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;