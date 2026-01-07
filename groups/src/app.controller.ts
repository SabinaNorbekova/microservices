import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('groups-get')
  async getGroups() {
    const groups = await this.appService.getAllGroups();
    return { success: true, data: groups };
  }

  @MessagePattern('groups-create')
  async createGroup(data: any) {
    return this.appService.createGroup(data);
  }
}
