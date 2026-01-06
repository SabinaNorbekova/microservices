import { Controller, Get, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Controller()
export class TeacherController{
    constructor(@Inject("TEACHER_SERVICE") private teacherClient: ClientProxy) { }
    
    @Get("teachers")
    getGroups() {
        return this.teacherClient.send("teacher-get", "salom teacher")
    }
}
