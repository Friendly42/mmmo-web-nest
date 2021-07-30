import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Region, RegionDocument} from "./region.schema";
import {CreateRegionDto} from "./dto/create-region.dto";
import {Model} from "mongoose";

@Injectable()
export class RegionsService {
    constructor(@InjectModel(Region.name) private regionModel: Model<RegionDocument>) {}
    
    async createRegion(dto: CreateRegionDto): Promise<Region> {
        const region = new this.regionModel(dto);
        return region.save();
    }
    
    async findAll(): Promise<Region[]> {
        return this.regionModel.find().exec();
    }
}
