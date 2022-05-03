import DataModel from "models/data.model";
import BaseRepository from "repositories/base.repository";
import BaseService from "./base.service";
import CalculationService from "./calculation.service";
import SendService from "./send.service";

export default class DataService extends BaseService<DataModel> {

    constructor(
        repository: BaseRepository<DataModel>,
        sendService: SendService,
        private readonly calculationService: CalculationService
    ) {
        super(repository, sendService);
    }
    async calculate() {
        const newInfo = { processed: true };
        const filter = (item: DataModel) => item.processed === false;

        const data = this.getAll();
        const filteredData = data.filter(filter);
        const calculatedData = this.calculationService.calculate(filteredData);
        await this.sendService.sendData({ items: calculatedData });
        this.repository.bulkUpdate(filter, newInfo);    
    }

    addItem(item: DataModel) {
        item.processed = false;
        this.add(item);
    }

}