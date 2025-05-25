import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma.module";


@Injectable()
export class ListService {
    constructor(
        @Inject('PRISMA') private readonly prisma: PrismaService
    ) {}

    async getList() {
        try {
        
        } catch (error) {
            throw new HttpException('Não foi possível buscar os dados', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}