import { Controller, Get, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Controller()
export class GroupController{
    constructor(@Inject("GROUP_SERVICE") private groupClient: ClientProxy) { }
    
    @Get("groups")
    getGroups() {
        return this.groupClient.send("group-get", "salom group")
    }
}
