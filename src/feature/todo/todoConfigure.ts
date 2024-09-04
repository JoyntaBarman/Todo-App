import { createSlice } from '@reduxjs/toolkit';

interface TodoType {
  title: string;
  description: string;
  compleated: boolean;
}

interface StateType {
   todoList: TodoType[];
}

const todoConfigure = createSlice({
  name: 'todo',
  initialState: {
    todoList: [],
  },
  reducers: {
    add: (state: StateType, actions) => {
      const value = actions.payload;
      if (value) {
        state.todoList.push({...value, compleated: false});
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

    compleateTodo: (state : StateType, actions) => {
      const existingTodo = state.todoList.find((item => item?.title === actions?.payload?.title)) ;
      console.log(existingTodo)
      existingTodo!.compleated! = true;
    },
  },
});

export default todoConfigure.reducer;
export const { add, remove, compleateTodo } = todoConfigure.actions;
