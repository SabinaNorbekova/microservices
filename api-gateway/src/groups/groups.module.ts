import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { GroupController } from "./group.controller";

@Module({
    imports: [
        ClientsModule.register([{
            name: "GROUP_SERVICE",
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://localhost:5672'],
                queue: "groups_queue",
                queueOptions: {
                    durable:false
                }
            }
        }])
    ],
    controllers:[GroupController]
})

export class GroupModule{}