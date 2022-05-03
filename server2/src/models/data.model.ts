import BaseModel from "./base.model";

export default class DataModel extends BaseModel {
    month: number;
    year: number;
    hours: number;
    value: number;
    employee: {
        name: string;
        document: string;
    }
    processed: boolean = false;
}