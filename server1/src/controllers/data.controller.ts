import { Request, Response } from "express";
import DataModel from "models/data.model";
import DataService from "services/data.service";

export default class DataController {

    constructor(
        private readonly service: DataService
    ) {}

    addItem(req: Request, res: Response) {
        try {
            const item: DataModel = req.body;
            item.processed = false;
            const result = this.service.add(item)
            return res.status(201).json(result);
        } catch (e) {
            return res.status(500).json(e);
        }
    }

    async calculate(_: Request, response: Response) {
        try {
            await this.service.calculate();
            return response.status(200).json({ message: "Todos os itens novos processados!" });
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    getAll(req: Request, res: Response) {
        try {
            return res.status(200).json(this.service.getAll());
        } catch (e) {
            return res.status(500).json(e);
        }
    }
}