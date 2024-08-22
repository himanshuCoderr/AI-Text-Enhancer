import { Router } from "express";
import postTextEnhancerText from "../Controllers/TextEnhancer.controllers.js";

const router = Router()
router.route('/').post(postTextEnhancerText)


export default router