import { createSlice } from '@reduxjs/toolkit';

interface DashboardStats {
  totalUsers: number;
  totalRevenue: number;
  activeSubscriptions: number;
  monthlyGrowth: number;
  conversionRate: number;
  churnRate: number;
}

interface DashboardState {
  stats: DashboardStats;
  isLoading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  stats: {
    totalUsers: 12458,
    totalRevenue: 45678,
    activeSubscriptions: 8923,
    monthlyGrowth: 12.5,
    conversionRate: 3.2,
    churnRate: 1.8,
  },
  isLoading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchStatsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchStatsSuccess: (state, action) => {
      state.isLoading = false;
      state.stats = action.payload;
      state.error = null;
    },
    fetchStatsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchStatsStart, fetchStatsSuccess, fetchStatsFailure } = dashboardSlice.actions;
export default dashboardSlice.reducer;
