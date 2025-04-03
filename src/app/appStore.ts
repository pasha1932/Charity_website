import { configureStore } from '@reduxjs/toolkit';
import auth from '@/admin/login/lib/authSlice';
import { api } from '@/shared/api/api';
import news from '@/widgets/news/model/slices/newsSlice';
import projects from '@/widgets/projects/model/slices/projectsSlice';
import { listenerMiddleware } from '@/admin/middleware/auth';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // Додаємо reducer RTK Query
    auth,
    news,
    projects,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).prepend(listenerMiddleware.middleware), // Додаємо middleware RTK Query
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;