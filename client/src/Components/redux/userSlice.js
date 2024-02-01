// appSlice.js
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: {
      email: '',
      mobile: '',
      password: '',
      repassword: '',
    },
    profile: {
      name: '',
      dob: '',
      currentAddress: '',
      longlive:'',
      description: '',
    },
    work: {
      currentWorkingStatus: '',
      additionalSaving: '',
    },
    // Add other fields as needed
  },
  reducers: {
    updateUserData: (state, action) => {
      state.user = action.payload;
    },
    updateProfileData: (state, action) => {
      state.profile = action.payload;
    },
    updateWorkData: (state, action) => {
      state.work = action.payload;
    },
    // Add other update actions as needed
  },
});

export const {
  updateUserData,
  updateProfileData,
  updateWorkData,
  // Add other update action exports as needed
} = appSlice.actions;
export default appSlice.reducer;
