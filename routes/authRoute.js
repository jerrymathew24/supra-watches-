import express from "express"
import { forgotPassword, loginController, registerController, testController } from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js"

//router object
const router = express.Router()

//routing
//register 
router.post("/register", registerController)
//LOGIN 
router.post('/login', loginController)
//forgot password
router.post('/forgot-password', forgotPassword)
//test
router.get('/test', requireSignIn, isAdmin, testController)
//protected route auth
router.post('/user-auth', (req, res) => {
    res.status(200).send({ ok: true })
})

export default router