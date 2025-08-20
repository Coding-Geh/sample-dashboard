import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import dashboardReducer from './slices/dashboardSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
  },
});

// Define types
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// Export types
export type { RootState, AppDispatch };
