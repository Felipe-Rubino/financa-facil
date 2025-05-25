import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ListService } from "./cases/list.service";
import { CreateTaskService } from "./cases/create-task.service";
import { ParamsTaskDTO } from "./dto/params-task.dto";
import { CreateTaskDTO } from "./dto/create-task.dto";
import { ApiTags } from "@nestjs/swagger";


@ApiTags('List')
@Controller('list')
export class ListController {

    constructor(
        private readonly listService: ListService,
        private readonly createTaskService: CreateTaskService
    ) {}

    @Get()
    async getList() {
        return this.listService.getList();
    }

    @Post()
    async createTask(@Body() task: CreateTaskDTO) {
        return this.createTaskService.createTask(task);

    }
}