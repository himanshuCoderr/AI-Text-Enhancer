import callGeminiAI from "../AI Model/llm.js"

const postEssayWritter = async (req, res)=>{
    console.log(req.body)
    const prompt = `Write a Essay on ${req.body.essayTitle}, follow the way of writting ${req.body.wayOfWritting} , the essay should be targetting ${req.body.targetAudience} , also follow the tone of voice ${req.body.toneOfVoice} use the language ${req.body.language} , and the word limit should not cross ${req.body.wordlimit}`
    const response = await callGeminiAI(prompt)
    res.send(response)
}


export default postEssayWritter