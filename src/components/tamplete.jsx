import Link from 'next/link';
import React from 'react';

const Tamplete = ({ item }) => {
  return (
    <div>
      <Link href={`/tamplete/${item.title}`}>
        <div className='p-5 cursor-pointer bg-[rgba(227,233,245,.4)] hover:bg-[#E0EEE9]'>
          <img className='h-96' src={item.img} alt={item.title} />
          <p className='text-center mt-5 font-bold text-xl '>{item.title}</p>
        </div>
      </Link>
    </div>
  );
};

export default Tamplete;
