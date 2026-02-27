import { Router } from "express";
import { register , login  } from "../controllers/auth.controller.js";

const router = Router();
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/add_to_activity");
router.route("/get_all_acitivty");


export default router;