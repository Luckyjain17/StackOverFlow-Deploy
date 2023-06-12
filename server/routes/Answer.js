import express from "express"

import { postAnswer, deleteAnswer } from '../controllers/Answer.js'
// import  { auth }  from "../middlewares/auth.js";

const router = express.Router();

router.patch('/post/:id',  postAnswer)
router.patch('/delete/:id',  deleteAnswer)

export default router