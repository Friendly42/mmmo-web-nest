import {ApiProperty} from "@nestjs/swagger";

export class CreateRegionDto {
    @ApiProperty({example: "EU1", description: 'Literal code for the region in the world. Usually uppercase.'})
    readonly countryCode: string;
}