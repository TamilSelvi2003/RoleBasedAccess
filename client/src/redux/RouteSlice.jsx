import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  routesByRole: {
    admin: ["Tasks", "Settings", "ManageUsers"],
    user: ["User", "About"],
    cashier: ["Cashier", "Accounts"],
  },
};

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setRoutesForRole: (state, action) => {
      const { role, routes } = action.payload;
      return {
        ...state,
        routesByRole: {
          ...state.routesByRole,
          [role]: routes,
        },
      };
    },
  },
});

export const { setRoutesForRole } = routeSlice.actions;
export default routeSlice.reducer;
