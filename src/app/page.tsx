'use client';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

interface Todostate {
  todo: string[];
}

export default function Home() {
  const todos = useSelector((state: Todostate) => state?.todo);

  console.log(todos);

  return (
    <main className="flex justify-center">
      {todos.length > 0 && (
        <div className="md:w-1/2 border border-black p-4 mt-10 rounded flex flex-col gap-2">
          {todos.map((todo) => (
            <div key={todo} className="bg-black text-white px-3 py-2 rounded">
              <p>{todo}</p>
            </div>
          ))}
        </div>
      )}

      {todos.length > 0 || (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-5xl text-gray-300 font-bold text-center">
            Your Todo List Is Empty
          </p>
          <p className="text-center mt-5 text-gray-400">
            please add todo from{' '}
            <Link href={'/add'} className="text-blue-600 cursor-pointer">
              Add Todo
            </Link>
          </p>
        </div>
      )}
    </main>
  );
}
