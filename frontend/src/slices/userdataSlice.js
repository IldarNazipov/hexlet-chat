import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: {},
};

const userdataSlice = createSlice({
  name: 'userdata',
  initialState,
  reducers: {
    getUserdata: (state, { payload }) => {
      state.entities = payload;
    },
    addMessage: (state, { payload }) => {
      state.entities.messages.push(payload);
    },
  },
});

export const { getUserdata, addMessage } = userdataSlice.actions;
export default userdataSlice.reducer;