import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { useApiErrorStore } from '@/src/zustand/apiErrorStore';

interface ErrorResponse {
  status: number;
  data: {
    message?: string;
    error?: string;
  };
}

export const apiErrorMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const error = action.payload as ErrorResponse;
    const errorMessage =
      error.data?.message ||
      error.data?.error ||
      'Something went wrong. Please try again.';
    if (errorMessage !== 'Invalid token')
      useApiErrorStore.getState().showError(errorMessage);
  }

  return next(action);
};
