import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateRegionDto} from "./dto/create-region.dto";
import {RegionsService} from "./regions.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Region} from "./region.schema";

@ApiTags('Regions')
@Controller('regions')
export class RegionsController {
    constructor(private regionsService: RegionsService) {}
    
    @ApiOperation({summary: 'Create a region'})
    @ApiResponse({status: 201, type: Region})
    @Post()
    create(@Body() regionDto: CreateRegionDto) {
        return this.regionsService.createRegion(regionDto);
    }

    @ApiOperation({summary: 'Get All Available Regions'})
    @ApiResponse({status: 201, type: [Region]})
    @Get()
    findAll() {
        return this.regionsService.findAll();
    }
}
