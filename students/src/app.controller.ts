import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('student-get')
  async getStudents() {
    const students = await this.appService.getAllStudents();
    return {
      success: true,
      data: students,
    };
  }

  @MessagePattern('student-create')
  async createStudent(data: any) {
    try {
      const result = await this.appService.saveStudent(data);
      return { success: true, result };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
