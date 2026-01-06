import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { StudentController } from "./students.controller";

@Module({
    imports: [
        ClientsModule.register([{
            name: "STUDENT_SERVICE",
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://localhost:5672'],
                queue: "students_queue",
                queueOptions: {
                    durable:false
                }
            }
        }])
    ],
    controllers:[StudentController]
})

export class StudentModule{}