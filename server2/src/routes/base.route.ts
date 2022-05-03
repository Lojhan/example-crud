
import BaseController from "../controllers/base.controller";
import { Router } from "express";
import CalculatedDataModel from "models/calculatedData.model";
import BaseRepository from "../repositories/base.repository";
import BaseService from "../services/base.service";

const router = Router();

const repository = new BaseRepository<CalculatedDataModel>();
const service = new BaseService(repository);
const controller = new BaseController(service);

///folha/consultar/cpf/mes/ano
router.get("/consultar/:document/:month/:year", (req, res) => controller.getByCpfAndMonthAndYear(req, res));

router.get("/listar", (req, res) => controller.getAll(req, res));

router.post("/add", (req, res) => controller.add(req, res));

export default router;