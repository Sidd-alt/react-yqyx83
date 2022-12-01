import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userlist: [],
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    updateUserList: (state, { payload }) => {
      state.userlist = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUserList } = adminSlice.actions;

export default adminSlice.reducer;
