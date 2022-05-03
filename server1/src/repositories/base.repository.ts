import BaseModel from "../models/base.model";
import * as crypto from "crypto";

export default class BaseRepository<T extends BaseModel> {
    data: T[] = [];

    getAll(): T[] {
        return this.data;
    }

    getById(id: string): T {
        return this.data.find(x => x.id === id);
    }

    add(item: { [x: string]: any } & T): T {
        const id = crypto.randomUUID();
        item.id = id;
        this.data.push(item);
        return item;
    }

    update(id: string, data: T): T {
        const index = this.data.findIndex(x => x.id === id);
        const item = this.data[index];
        this.data[index] = { ...item, ...data };
        return this.data[index];
    }

    delete(id: string): void {
        const index = this.data.findIndex(x => x.id === id);
        this.data.splice(index, 1);
    }
}