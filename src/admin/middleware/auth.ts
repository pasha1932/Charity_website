import { api } from '@/shared/api/api';
import { createListenerMiddleware } from '@reduxjs/toolkit'



export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  matcher: api.endpoints.login.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()

    if (action.payload.token) {
      localStorage.setItem('token', action.payload.token);
    }
  },
})