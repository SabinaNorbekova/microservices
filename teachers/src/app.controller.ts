import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern("teacher-get")
  getGroups(data: string) {
    console.log(12, data)
    return {
      success: true,
      data:[{name:"Teacher"}]
    }
  }
}
