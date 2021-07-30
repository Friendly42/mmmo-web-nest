import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {ApiProperty} from "@nestjs/swagger";

export type RegionDocument = Region & Document;

@Schema()
export class Region {
    @ApiProperty({example: "EU1", description: 'Literal code for the region in the world. Usually uppercase.'})
    @Prop()
    countryCode: string;
}

export const RegionSchema = SchemaFactory.createForClass(Region);
