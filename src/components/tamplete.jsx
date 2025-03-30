import React from 'react';

const Tamplete = ({ item }) => {
  return (
    <div>
      <div className='p-5 cursor-pointer bg-[rgba(227,233,245,.4)] hover:bg-[#E0EEE9]'>
        <img className='h-96' src={item.img} alt={item.title} />
        <p className='text-center mt-5 font-bold text-xl '>{item.title}</p>
      </div>
    </div>
  );
};

export default Tamplete;
