import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './student.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<Student>,
  ) {}

  async saveStudent(data: any) {
    const newStudent = new this.studentModel(data);
    return newStudent.save(); 
  }

  async getAllStudents() {
    return this.studentModel.find().exec();
  }
}
