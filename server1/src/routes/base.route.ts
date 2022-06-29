import DataService from "../services/data.service";
import { Router } from "express";
import SendService from "../services/send.service";
import DataModel from "models/data.model";
import BaseRepository from "../repositories/base.repository";
import DataController from "../controllers/data.controller";
import CalculationService from "../services/calculation.service";

const router = Router();
const sendService = new SendService();
const calculationService = new CalculationService()

const repository = new BaseRepository<DataModel>();
const service = new DataService(repository, sendService, calculationService);
const controller = new DataController(service);

router.post("/cadastrar", (req, res) => controller.addItem(req, res));

export default router;