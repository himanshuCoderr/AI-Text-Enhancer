import React, { useRef } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const FileUploads = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Programmatically trigger the hidden file input click
    fileInputRef.current.click();
  };

  return (
    <div>
      <Navbar />
      <h1 className='text-center text-3xl mt-10 font-bold'>Enhance Your File Here!</h1>
      <h2 className='text-center text-xl mt-10 from-neutral-500 text-red-600 font-serif'>
        Use the power of AI for smarter and faster document processing with an enhanced PDF experience.
      </h2>
      <div className='w-[80vw] border-dotted border-2 border-red-400 rounded-md m-auto mt-10 flex flex-col items-center p-5'>
        <UploadFileIcon className='scale-150 mt-7' />
        <h3 className='mt-10 text-xl font-bold '  >Drag And Drop Documents here to upload</h3>
        <button onClick={handleButtonClick} className='px-10 py-4 bg-blue-900 mt-5 rounded-lg text-white text-xl' >
          Select from Device
        </button>
        {/* Hidden input */}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <p className='font-extralight text-gray-400 mt-5' >Up to 10 mb of file is supported and upload only jpg , png and pdf file</p>
      </div>

      <div className=' w-[50vw] h-[10vh]  m-auto flex items-center justify-center mt-5 '  >
        {/* progress show */}
        <div>
          <div className='w-[50px] h-[50px] bg-yellow-200 rounded-full flex items-center justify-center' >1</div>
          <h1>Upload</h1>
        </div>
        <div className='h-[1px] w-[20%] bg-green-600' ></div>
        <div className='relative'  >
          <div className='w-[50px] h-[50px] bg-yellow-200 rounded-full flex items-center justify-center' >2</div>
          <h1 className='absolute w-[12vw]  left-[-50%]' >Wait For AI To Process</h1>
        </div>
        <div className='h-[1px] w-[20%] bg-green-600' ></div>
        <div className='relative' >
          <div className='w-[50px] h-[50px] bg-yellow-200 rounded-full flex items-center justify-center' >3</div>
          <h1 className='absolute' >And AI Output🗿 </h1>
        </div>

      </div>
    </div>
  );
};

export default FileUploads;
