import BookController from "../controllers/book.controller";
import BookRepository from "../repositories/book.repository";
import BookService from "../services/book.service";
import { Router } from "express";
import EmailService from "../services/mail.service";
import axios from "axios";
import ViaCepService from "../services/viacep.service";

const router = Router();

const axiosInstance = axios.create();
const emailService = new EmailService(axiosInstance);
const viacepService = new ViaCepService(axiosInstance);
const repository = new BookRepository();
const service = new BookService(repository, emailService, viacepService);
const controller = new BookController(service);

router.get("/", (req, res) => controller.getAll(req, res));
router.get("/:id", (req, res) => controller.getById(req, res));
router.post("/", (req, res) => controller.add(req, res));
router.put("/:id", (req, res) => controller.update(req, res));
router.delete("/:id", (req, res) => controller.delete(req, res));

export default router;