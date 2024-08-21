import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="px-5 bg-black py-10 text-white flex items-center justify-between gap-10">
      <div>
        <h1 className="text-3xl font-bold ">TodoApp</h1>
      </div>
      <div className='flex gap-4 text-white/90'>
        <Link href={'/'} className='px-4 py-2 hover:text-white'>Todos</Link>
        <Link href={'/add'} className='px-4 py-2 hover:text-white'>Add Todo</Link>
      </div>
    </div>
  );
};

export default Navbar;
