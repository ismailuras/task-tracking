import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { payload } = action;
      state.items = [payload, ...state.items];
    },
    removeTask: (state, action) => {
      const { payload } = action;
      state.items = state.items.filter((item) => item.id !== payload);
    },
    updateTask: (state, action) => {
      const { payload } = action;
      const _index = state.items.findIndex((item) => item.id === payload.id);
      state.items[_index] = payload;
    },
  },
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
