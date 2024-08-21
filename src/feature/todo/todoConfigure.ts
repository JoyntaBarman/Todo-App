import { createSlice } from '@reduxjs/toolkit';

interface initState {
  todoList: object[];
}

const todoConfigure = createSlice({
  name: 'todo',
  initialState: {
    todoList: [],
  },
  reducers: {
    add: (state: {todoList: object[]}, actions) => {
      const value = actions.payload.todo;
      if (value) {
        state.todoList.push({ todo: value });
      }
    },
    remove: (state, actions) => {
      if (actions.payload.index === 'all') {
        return {todoList: []};
      }
      const newArr = state.todoList.filter(
        (value: string, index: number) => index !== actions?.payload?.index
      );

      return {todoList: newArr};
    },
  },
});

export default todoConfigure.reducer;
export const { add, remove } = todoConfigure.actions;
