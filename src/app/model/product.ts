import { Deserializable } from './deserializable';
import { MeasurementType } from "../model/measurement-type.enum";

export class Product implements Deserializable {
    _id: String;
    name: String;
    unit_price_lkr: Number;
    unit_price_usd: Number;
    long_desc: String;
    short_desc: String;
    category: String;
    supplier: String;
    features: String;
    promotions: String;
    stockAvailable: Boolean;
    showToCustomer: Boolean;
    measurementUnit: MeasurementType;
    thumbImage: string;
    fullImage: string;
    created_date: Date;
    modified_date: Date;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
