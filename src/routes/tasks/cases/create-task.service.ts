import { HttpException, HttpStatus, Inject } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma.module";
import { CreateTaskDTO } from "../dto/create-task.dto";
import { ParamsTaskDTO } from "../dto/params-task.dto";


export class CreateTaskService {
    constructor(
        @Inject('PRISMA') private readonly prisma: PrismaService
    ) {}

    async createTask(task: CreateTaskDTO, params: ParamsTaskDTO) {
        try {
            const taskCreated = await this.prisma.tasks.create({
                data: {
                    TAREFA: task.TAREFA_TITULO,
                    DESCRICAO: task.TAREFA_DESCRICAO,
                    STATUS: task.STATUS,
                    CODUSU: +params.CODUSU,
                }
            });
            return taskCreated;
        } catch (error) {
            console.log(error)
            console.error(error);
            throw new HttpException('Não foi possível criar a tarefa', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}