import React, { useState } from 'react';

const EmailWriter = ({ handleView }) => {
  const [purpose, setPurpose] = useState('');
  const [keyPoints, setKeyPoints] = useState('');
  const [targetAudience, setTargetAudience] = useState('Everyone');
  const [toneOfVoice, setToneOfVoice] = useState('Professional');
  const [language, setLanguage] = useState('English');
  const [aiOutput, setAiOutput] = useState('');

  const handleGenerate = () => {
    // Placeholder for AI generation logic
    setAiOutput(`Generated email based on:
    Purpose: ${purpose},
    Key Points: ${keyPoints},
    Audience: ${targetAudience},
    Tone: ${toneOfVoice},
    Language: ${language}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center rounded-lg" style={{ display: handleView ? 'flex' : 'none' }}>
      <div className=" rounded-lg p-6 w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">AI Email Writer</h1>
        </div>
        <div className="flex flex-col space-y-4">
          <textarea
            className="border rounded-lg p-4 w-full resize-none"
            rows="3"
            placeholder="Purpose of email: Express gratitude, seek business opportunities, etc."
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />
          <textarea
            className="border rounded-lg p-4 w-full resize-none"
            rows="3"
            placeholder="Key points"
            value={keyPoints}
            onChange={(e) => setKeyPoints(e.target.value)}
          />
          <div className="flex flex-col space-y-2">
            <label className="font-medium">Target Audience</label>
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
            <label className="font-medium">Tone of Voice</label>
            <select
              className="border rounded-lg p-2"
              value={toneOfVoice}
              onChange={(e) => setToneOfVoice(e.target.value)}
            >
              <option>Professional</option>
              {/* Add more options as necessary */}
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-medium">Language</label>
            <select
              className="border rounded-lg p-2"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>English</option>
              {/* Add more options as necessary */}
            </select>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={handleGenerate}>
              Generate
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 m-3 border-l-2 min-h-screen p-6 bg-white  rounded-lg">
        <h2 className="text-xl font-semibold mb-4">AI Generated Email</h2>
        <div className="whitespace-pre-wrap">{aiOutput}</div>
      </div>
    </div>
  );
};

export default EmailWriter;
