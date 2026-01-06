import { Controller, Get, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Controller()
export class StudentController{
    constructor(@Inject("STUDENT_SERVICE") private studentClient: ClientProxy) { }
    
    @Get("students")
    getGroups() {
        return this.studentClient.send("student-get", "salom talaba")
    }
}
