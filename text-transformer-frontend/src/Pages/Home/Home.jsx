import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import TextEnhancer from '../../Components/TextEnhancer/TextEnhancer';
import EmailWritter from '../../Components/EmailWritter/EmailWritter';
import EssayWritter from '../../Components/EssayWritter/EssayWritter';
import DescriptionWritter from '../../Components/DescriptionWritter/DescriptionWritter';

const Home = () => {
  let [textEnhanceView, setTextEnhanceView] = useState(true);
  let [emailWritterView, setEmailWritterView] = useState(false);
  let [essayWritterView, setEssayWritterView] = useState(false);
  let [descpWritterView, setDescpWritterView] = useState(false);

  return (
    <div className=''>
      <Navbar />
      <button className='bg-[#1A3636] fixed right-3 top-28 p-3 rounded-lg text-white cursor-pointer'>
        Upload File
      </button>
      <div className='flex flex-col md:flex-row w-[100%] mt-5'>
        <div className='w-full md:w-[20%] h-auto md:h-[80%] flex flex-col justify-between items-center'>
          <div
            className='w-[55%] h-[24%] flex justify-center items-center text-black flex-col p-2 rounded-xl mb-3 cursor-pointer'
            onClick={() => {
              setTextEnhanceView(true);
              setEmailWritterView(false);
              setEssayWritterView(false);
              setDescpWritterView(false);
            }}
            style={textEnhanceView == true  ? {backgroundColor:"#afd9d9"} :{backgroundColor : "#1a3636"}}
          >
            <img src='/images/brain-circuit-icon.jpg' alt='' className='w-[85%] h-[65%]' />
            <p className='text-center text-white'>Text <br /> Enhancer</p>
          </div>
          <div
            className='w-[55%] h-[24%] flex justify-center items-center bg-[#1a3636] flex-col p-2 text-white rounded-xl mb-3 cursor-pointer'
            onClick={() => {
              setTextEnhanceView(false);
              setEmailWritterView(false);
              setEssayWritterView(true);
              setDescpWritterView(false);
            }}
            style={essayWritterView == true  ? {backgroundColor:"#afd9d9"} :{backgroundColor : "#1a3636"}}
          
          >
            <img src='/images/brain-circuit-icon.jpg' alt='' className='w-[85%] h-[65%]' />
            <p className='text-center'>Essay <br /> Writter</p>
          </div>
          <div
            className='w-[55%] h-[24%] flex justify-center items-center bg-[#1a3636] flex-col p-2 text-white rounded-xl mb-3 cursor-pointer'
            onClick={() => {
              setTextEnhanceView(false);
              setEmailWritterView(true);
              setEssayWritterView(false);
              setDescpWritterView(false);
            }}
            style={emailWritterView == true  ? {backgroundColor:"#afd9d9"} :{backgroundColor : "#1a3636"}}
          
          >
            <img src='/images/brain-circuit-icon.jpg' alt='' className='w-[85%] h-[65%]' />
            <p className='text-center'>Email <br /> Writter</p>
          </div>
          <div
            className='w-[55%] h-[24%] flex justify-center items-center bg-[#1a3636] flex-col p-2 text-white rounded-xl mb-3 cursor-pointer'
            onClick={() => {
              setTextEnhanceView(false);
              setEmailWritterView(false);
              setEssayWritterView(false);
              setDescpWritterView(true);
            }}
            style={descpWritterView == true  ? {backgroundColor:"#afd9d9"} :{backgroundColor : "#1a3636"}}
          
          >
            <img src='/images/brain-circuit-icon.jpg' alt='' className='w-[85%] h-[65%]' />
            <p className='text-center'>Description <br /> Writter</p>
          </div>
        </div>
        <div className='w-full md:w-[80%]'>
          <TextEnhancer handleView={textEnhanceView} />
          <EmailWritter handleView={emailWritterView} />
          <EssayWritter handleView={essayWritterView} />
          <DescriptionWritter handleView={descpWritterView} />
        </div>
      </div>
    </div>
  );
};

export default Home;
