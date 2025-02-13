import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../services/ApiEndpoint';

export const updateUser = createAsyncThunk('updateuser', async (_, { rejectWithValue }) => {
  try {
    const request = await get('/api/auth/CheckUser');
    return request.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

const initialState = {
  loading: false,
  error: null,
  user: null,
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    SetUser: (state, action) => {
      state.user = action.payload
    },
    Logout: (state) => {
      state.user = null;
      state.loading = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true
    })
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = null,
        state.user = action.payload
    })
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = null,
        state.error = action.error.message,
        state.user = null
    })
  }
})

export const { SetUser, Logout } = AuthSlice.actions
export default AuthSlice.reducer;