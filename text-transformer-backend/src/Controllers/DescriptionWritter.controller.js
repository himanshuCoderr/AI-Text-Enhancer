import callGeminiAI from "../AI Model/llm.js"

const postDescriptionWritter = async (req , res)=>{
    console.log(req.body)
    const prompt = `What the product is ${req.body.productName}, description for product ${req.body.productDescription} ,the talking points should be ${req.body.talkingPoints}, the product should be targetting ${req.body.targetAudience} , also follow the tone of voice ${req.body.toneOfVoice} use the language ${req.body.language}`
    const response = await callGeminiAI(prompt)
    res.send(response)
}

export default postDescriptionWritter