
import EmailController from "../controllers/email.controller";
import { Router } from "express";
import EmailService from "../services/email.service";

const router = Router();

const service = new EmailService();
const controller = new EmailController(service);

router.post("/", (req, res) => controller.sendEmail(req, res));

export default router;