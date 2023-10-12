import { Router } from "express";
import { userController } from "~/controllers/user.controllers";
const router = Router()
router.post('/register', userController.createUser)
export default router