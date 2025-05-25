import { Module } from "@nestjs/common";
import { CreateTaskService } from "./cases/create-task.service";
import { ListService } from "./cases/list.service";
import { ListController } from "./task-controller.";


@Module({
    imports: [],
    controllers: [ListController],
    providers: [CreateTaskService, ListService],
})
export default class TaskModule {}