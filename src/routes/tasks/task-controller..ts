import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ListService } from "./cases/list.service";
import { CreateTaskService } from "./cases/create-task.service";
import { ParamsTaskDTO } from "./dto/params-task.dto";
import { CreateTaskDTO } from "./dto/create-task.dto";
import { ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";


@ApiTags('List')
@Controller('task')
export class ListController {

    constructor(
        private readonly listService: ListService,
        private readonly createTaskService: CreateTaskService
    ) {}

    @Get('listar')
    async getList() {
        return this.listService.getList();
    }

    @Post()
    @ApiConsumes('multipart/form-data', 'application/json')
    @ApiBody({ type: CreateTaskDTO })
    async createTask(@Body() task: CreateTaskDTO, @Query() params: ParamsTaskDTO) {
        return this.createTaskService.createTask(task, params);
    }
}