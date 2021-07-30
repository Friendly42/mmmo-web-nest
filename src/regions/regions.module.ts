import { Module } from '@nestjs/common';
import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Region, RegionSchema} from "./region.schema";

@Module({
  imports: [MongooseModule.forFeature([{name: Region.name, schema: RegionSchema}])],
  controllers: [RegionsController],
  providers: [RegionsService]
})
export class RegionsModule {}
