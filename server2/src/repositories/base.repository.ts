import BaseModel from "../models/base.model";
import * as crypto from "crypto";

export default class BaseRepository<T extends BaseModel> {
    data: T[] = [];

    getAll(): T[] {
        return this.data;
    }

    add(item: { [x: string]: any } & T): T {
        const id = crypto.randomUUID();
        item.id = id;
        this.data.push(item);
        return item;
    }

    bulkUpdate(search: (item: T) => boolean, newData: any) {
        let itemsToUpdate = this.findByQuery(search);
        itemsToUpdate = itemsToUpdate.map(item => {
            return { ...item, ...newData };
        })

        itemsToUpdate.forEach(item => {
            const index = this.data.findIndex(i => i.id === item.id);
            this.data[index] = item;
        })
    }

    findByQuery(search: (item: T) => boolean) {
        return this.data.filter(search);
    }
}