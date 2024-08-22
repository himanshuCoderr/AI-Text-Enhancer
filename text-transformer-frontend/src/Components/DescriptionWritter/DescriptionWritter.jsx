
import React, { useState } from 'react';

const ProductDescriptionGenerator = ({ handleView }) => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [talkingPoints, setTalkingPoints] = useState('');
  const [targetAudience, setTargetAudience] = useState('Everyone');
  const [toneOfVoice, setToneOfVoice] = useState('Professional');
  const [language, setLanguage] = useState('English');

  return (
    <div className="flex justify-center items-center mr-2 rounded-lg border-2" style={handleView ? { display: "flex" } : { display: "none" }} >
      <div className="bg-white shadow-lg rounded-lg p-6 w-[50%]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Product Description Generator</h1>
        </div>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            className="border rounded-lg p-4 w-full"
            placeholder="Product name: iPhone 12, Samsung Galaxy, WhatsApp"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <textarea
            className="border rounded-lg p-4 w-full resize-none"
            rows="4"
            placeholder="Product description: Tell us what your product or service is about."
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
          <input
            type="text"
            className="border rounded-lg p-4 w-full"
            placeholder="Talking points (optional)"
            value={talkingPoints}
            onChange={(e) => setTalkingPoints(e.target.value)}
          />
          <div className="flex flex-col space-y-2">
            <label className="font-medium">Target audience</label>
            <select
              className="border rounded-lg p-2"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
            >
              <option>Everyone</option>
              {/* Add more options as necessary */}
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-medium">Tone of voice</label>
            <select
              className="border rounded-lg p-2"
              value={toneOfVoice}
              onChange={(e) => setToneOfVoice(e.target.value)}
            >
              <option>Professional</option>
              {/* Add more options as necessary */}
            </select>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Generate</button>
          </div>
        </div>
      </div>
      <div className='w-[50%] border-l-2 min-h-screen ' >

      </div>
    </div>

  );
};

export default ProductDescriptionGenerator;


// import React from 'react'

// const DescriptionWritter = ({handleView}) => {
//   return (
//     <div style={handleView ? {display : "block"} : {display :"none"} } >DescriptionWritter</div>
//   )
// }

// export default DescriptionWritter