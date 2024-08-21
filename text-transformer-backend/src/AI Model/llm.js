// const { GoogleGenerativeAI } = require("@google/generative-ai");
import { config } from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";
config();

const genAI = new GoogleGenerativeAI("AIzaSyABodRJVUhBTsUzf_P-re_qtwevy5PjK0M");


const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function callGeminiAI(userPrompt) {
    if (userPrompt.length <= 0) {
        return "please enter a valid prompt"
    }
    const prompt = userPrompt
    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        return text
    } catch (error) {
        return error
    }

}

const res = await callGeminiAI("Suggest me some good Hindi Indian Songs")
console.log(res)


export default callGeminiAI