import React from 'react'

const loader = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>

      <p className='text-gray-600 ml-4 '>
        This may take a few while. Please wait...
      </p>
    </div>
  );
}

export default loader