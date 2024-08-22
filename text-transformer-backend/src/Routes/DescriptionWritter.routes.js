import {Router} from 'express'
import postDescriptionWritter from '../Controllers/DescriptionWritter.controllers.js'

const router = Router()
router.route("/DescriptionWritter").post(postDescriptionWritter)

export default router