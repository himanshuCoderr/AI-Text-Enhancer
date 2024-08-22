import { Router } from "express";
import EmailWritter from "../Controllers/EmailWritter.controller.js";

const router = Router()


router.route("/").post(EmailWritter)


export default router