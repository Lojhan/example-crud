import CalculatedDataModel from "models/calculatedData.model";
import BaseRepository from "../repositories/base.repository";

export default class BaseService {
    
    constructor(
        private readonly repository: BaseRepository<CalculatedDataModel>
    ) {}

    getAll() {
        const allData = this.repository.getAll();
        return allData;
    }

    getFiltered(document: string, month: number, year: number) {
        const filter = (item: CalculatedDataModel) => item.employee.document === document && item.month === month && item.year === year
        const filteredData = this.repository.findByQuery(filter);
        return filteredData;
    }

    addItems(items: CalculatedDataModel[]) {
        items.forEach(item => {
            this.repository.add(item);
        });
    }
}