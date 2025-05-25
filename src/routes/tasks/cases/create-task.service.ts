import { HttpException, HttpStatus, Inject } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma.module";
import { CreateTaskDTO } from "../dto/create-task.dto";


export class CreateTaskService {
    constructor(
        @Inject('PRISMA') private readonly prisma: PrismaService
    ) {}

    async createTask(task: CreateTaskDTO) {
        try {
            const taskCreated = await this.prisma.tasks.create({
                data: {
                    TAREFA: task.TAREFA_TITULO,
                    DESCRICAO: task.TAREFA_DESCRICAO,
                    STATUS: task.STATUS,
                }
            });
            return taskCreated;
        } catch (error) {
            throw new HttpException('Não foi possível criar a tarefa', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}