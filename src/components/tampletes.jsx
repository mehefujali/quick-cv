import React from 'react';
import Tamplete from './tamplete';

const TampleteS = () => {
  const tamplete1 = './tamplete1.png';
  const tamplete2 = './tamplete2.png';
  const tamplete3 = './tamplete3.png';
  const tapleteInfo = [
    { title: 'Tamplete 1', img: tamplete1 },
    { title: 'Tamplete 2', img: tamplete2 },
    { title: 'Tamplete 3', img: tamplete3 },
  ];
  return (
    <div className='flex gap-10'>
      {tapleteInfo?.map((item, i) => {
        return (
          <div key={i}>
            <Tamplete item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default TampleteS;
