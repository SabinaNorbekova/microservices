import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getAllGroups() {
    return this.prisma.group.findMany();
  }

  async createGroup(data: any) {
    return this.prisma.group.create({ data });
  }
}
