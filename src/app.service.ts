import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getRegions() {
    return [{id: 1, countryCode: 'RU'}, {id: 2, countryCode: 'EU1'}];
  }
}
