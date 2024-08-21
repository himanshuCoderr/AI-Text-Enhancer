import callGeminiAI from "../AI Model/llm.js"


const postTextEnhancerText = async function(req , res){
    console.log(req.body)
    const questionToAskGemini  = `Hey Enhance This text ${req.body.textToEnhance}`
    const geminiRes = await callGeminiAI(questionToAskGemini)
    res.send(geminiRes)
}


export default postTextEnhancerText

