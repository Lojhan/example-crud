import BookController from "../controllers/book.controller";
import BookRepository from "../repositories/book.repository";
import BookService from "../services/book.service";
import { Router } from "express";

const router = Router();

const repository = new BookRepository();
const service = new BookService(repository);
const controller = new BookController(service);

router.get("/", (req, res) => controller.getAll(req, res));
router.get("/:id", (req, res) => controller.getById(req, res));
router.post("/", (req, res) => controller.add(req, res));
router.put("/:id", (req, res) => controller.update(req, res));
router.delete("/:id", (req, res) => controller.delete(req, res));

export default router;