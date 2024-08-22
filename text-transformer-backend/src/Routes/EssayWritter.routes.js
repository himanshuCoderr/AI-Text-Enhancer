import {Router} from 'express'
import postEssayWritterSAmple from '../Controllers/EssayWritter.controllers.js'

const router = Router()

router.route("/EssayWritter").post(postEssayWritterSAmple)

export default router