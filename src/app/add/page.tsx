'use client';
import { add, remove } from '@/feature/todo/todoConfigure';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface TodoState {
  todo: {todoList: object[]};
}

const Add = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const todos = useSelector((state: TodoState) => state?.todo.todoList);
  const dispatch = useDispatch();

  const inputOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const getInputTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      dispatch(add({ todo: inputValue }));
      setInputValue('');
    }
  };

  const deleteTodo = (index: number | string) => {
    dispatch(remove({ index: index }));
  };

  return (
    <div className="px-4 md:px-0">
      <form
        onSubmit={getInputTodo}
        className="border border-black mt-10 p-2 md:w-1/2 mx-auto flex gap-2 items-center justify-between rounded"
      >
        <input
          onChange={inputOnchange}
          className="outline-none  flex-1 h-full"
          type="text"
          placeholder="Type your todo."
          value={inputValue}
        />
        <button type="submit" className="px-4 py-3 bg-black text-white rounded">
          Add Todo
        </button>
      </form>

      {todos.length > 0 && (
        <div>
          <div className="border border-black mt-10 p-2 md:w-1/2 mx-auto flex flex-col gap-2 rounded">
            {todos.map((todo , index: number) => (
              <div
                key={todo.todo}
                className="px-2 py-3 bg-black text-white rounded flex items-center justify-between gap-2"
              >
                <p className="text-wrap">{todo.todo}</p>
                <div className="flex items-center justify-center">
                  <RiDeleteBin6Line
                    onClick={() => deleteTodo(index)}
                    size={20}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
          {todos.length > 1 && (
            <div className="flex justify-center mt-5">
              <button
                onClick={() => deleteTodo('all')}
                className="px-4 py-2 bg-black text-yellow-400 hover:text-white rounded duration-200 cursor-pointer"
              >
                Delete All Todo
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Add;
