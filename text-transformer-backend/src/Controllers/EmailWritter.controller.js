import callGeminiAI from "../AI Model/llm.js"

const EmailWritter = async (req , res)=>{
    console.log(req.body)
    const prompt = `Write a Email for purpose ${req.body.purpose}, having the key points ${req.body.keyPoints} , the email should be targetting ${req.body.targetAudience} , also follow the tone of voice ${req.body.toneOfVoice} use the language ${req.body.language}`
    const response = await callGeminiAI(prompt)
    res.send(response)
}

export default EmailWritter