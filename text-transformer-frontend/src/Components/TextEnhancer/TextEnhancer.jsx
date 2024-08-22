import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const TextEnhancer = ({ handleView }) => {
  return (
    <div
      className={`h-[90vh] w-[90vw] md:w-[80vw] mt-2 m-auto flex flex-col md:flex-row justify-between ${handleView ? 'block' : 'hidden'}`}
    >
      <div className='w-full md:w-[40%] h-full flex items-center p-3'>
        <div className='w-full h-full'>
          <h1 className='text-center text-2xl mb-4'>Your Text</h1>
          <textarea
            className='w-full h-[60vh] md:h-[80vh] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter your text here...'
          ></textarea>
        </div>
      </div>
      <div className='w-full md:w-[20%] h-full flex flex-col md:flex-row justify-center items-center my-4 md:my-0'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
          <ChevronRightIcon className='w-5 h-5 mr-2' />
          Generate
        </button>
      </div>
      <div className='w-full md:w-[40%] h-full flex items-center p-3'>
        <div className='w-full h-full'>
          <h1 className='text-center text-2xl mb-4'>AI Generated Text</h1>
          <textarea
            className='w-full h-[60vh] md:h-[80vh] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Generated text will appear here...'
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TextEnhancer;
