import { Request, Response } from "express";
import BaseService from "../services/base.service";

export default class BaseController {

    constructor(
        private readonly service: BaseService
    ) {}

    getAll(req: Request, res: Response) {
        try {
            const result = this.service.getAll();
            return res.status(200).json(result);
        } catch (e) {
            return res.status(500).json(e);
        }
    }

    getByCpfAndMonthAndYear(req: Request, res: Response) {
        try {
            const { document, month, year } = req.params;
            const result = this.service.getFiltered(document, +month, +year);
            return res.status(200).json(result);
        } catch (e) {
            return res.status(500).json(e);
        }

    }

    add(req: Request, res: Response) {
        
        try {
            const { items } = req.body;
            const result = this.service.addItems(items);
            return res.status(201).json(result);
        } catch (e) {
            return res.status(500).json(e);
        }
    }
}