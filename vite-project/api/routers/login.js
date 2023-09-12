import { Router } from "express";
import { validate } from "../validations/validateService.js";
import Login from "../services/login.js"

const router = Router()

router.post('/user', validate(Login.loginUser));

export { router };
