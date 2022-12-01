import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userdetails: {
    name: '',
    email: '',
    phone: '',
    adults: '',
    children: '',
    checkin: '',
    checkout: '',
    room: '',
  },
  stepperNo: 1,
};

export const userInfoSlice = createSlice({
  name: 'userinfo',
  initialState,
  reducers: {
    updateStepperNo: (state, { payload }) => {
      state.stepperNo = payload;
    },
    updateuserdetails: (state, { payload }) => {
      state.userdetails = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateStepperNo, updateuserdetails } = userInfoSlice.actions;

export default userInfoSlice.reducer;
