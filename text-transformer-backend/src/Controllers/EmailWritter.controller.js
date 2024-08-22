import callGeminiAI from "../AI Model/llm.js"

const EmailWritter = async (req , res)=>{
    console.log(req.body)
    res.send("Req Rec at Email Writter")
}

export default EmailWritter