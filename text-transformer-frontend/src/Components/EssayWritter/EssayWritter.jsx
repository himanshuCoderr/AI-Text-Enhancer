import React, { useState } from 'react';

const EssayWritter = ({ handleView }) => {
    const [content, setContent] = useState('');
    const [howToImprove, setHowToImprove] = useState('Be innovative: Make your content more compelling');
    const [targetAudience, setTargetAudience] = useState('Everyone');
    const [toneOfVoice, setToneOfVoice] = useState('Professional');
    const [language, setLanguage] = useState('English');
    const [generatedContent, setGeneratedContent] = useState('');

    const handleGenerate = () => {
        // Add logic to generate content based on input
        setGeneratedContent('Generated content will be displayed here...');
    };

    return (
        <div className={`bg-gray-50 min-h-screen flex flex-col md:flex-row justify-center items-center p-4 rounded-lg ${handleView ? 'block' : 'hidden'}`}>
            <div className="md:w-[50%] w-full p-6">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold">Essay Writter</h1>
                </div>
                <div className="flex flex-col space-y-4">
                    <textarea
                        className="border rounded-lg p-4 w-full resize-none"
                        rows="5"
                        placeholder="A huge part of a researcher's job is to sift through data. That is literally the definition of 'research.'"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <div className="flex flex-col space-y-2">
                        <label className="font-medium">Way of Writting</label>
                        <select
                            className="border rounded-lg p-2"
                            value={howToImprove}
                            onChange={(e) => setHowToImprove(e.target.value)}
                        >
                            <option>Be innovative: Make your content more compelling</option>
                            {/* Add more options as necessary */}
                        </select>
                    </div>
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
                        <button
                            onClick={handleGenerate}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Generate
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:w-[50%] w-full p-6 border-l-2 border-gray-200">
                <h1 className="text-2xl font-semibold mb-4">AI Generated Text</h1>
                <textarea
                    className="border rounded-lg p-4 w-full h-[60vh] md:h-[80vh] resize-none"
                    value={generatedContent}
                    readOnly
                ></textarea>
            </div>
        </div>
    );
};

export default EssayWritter;
