import React from 'react';

const Repos = ({repo}) => {
  return (
    <div className='flex justify-center py-2 bg-stone-300'>
      <h2 className="text-base">{repo.name}</h2>
    </div>
  );
}

export default Repos;