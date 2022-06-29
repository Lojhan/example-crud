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
            const result = this.service.addItem(item)
            return res.status(201).json(result);
        } catch (e) {
            return res.status(500).json(e);
        }
    }
}