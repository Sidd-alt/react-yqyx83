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
  roomSelected: '',
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
    setroomSelected: (state, { payload }) => {
      state.roomSelected = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateStepperNo, updateuserdetails, setroomSelected } =
  userInfoSlice.actions;

export default userInfoSlice.reducer;
