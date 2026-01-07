import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { Student, StudentSchema } from './student.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/students_db'),
    MongooseModule.forFeature([name: Student.name, schema: StudentSchema])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
