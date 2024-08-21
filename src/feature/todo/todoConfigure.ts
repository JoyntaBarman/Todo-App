import { createSlice } from '@reduxjs/toolkit';

const todoConfigure = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    add: (state: string[], actions) => {
      const value = actions.payload.todo;
      if (value) {
        state.push(value);
      }
    },
    remove: (state, actions) => {
      if (actions.payload.index === 'all') {
        return [];
      }
      const newArr = state.filter(
        (value: string, index: number) => index !== actions?.payload?.index
      );

      return newArr;
    },
  },
});

export default todoConfigure.reducer;
export const { add, remove } = todoConfigure.actions;
