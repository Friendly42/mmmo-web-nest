import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {Region} from "./regions/region.schema";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({summary: 'Hello World'})
  @ApiResponse({status: 200, type: String})
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
