import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupModule } from './groups/groups.module';
import { GroupController } from './groups/group.controller';
import { StudentModule } from './students/students.module';
import { TeacherModule } from './teachers/teachers.module';

@Module({
  imports: [GroupModule,StudentModule,TeacherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
