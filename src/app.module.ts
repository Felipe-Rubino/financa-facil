import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListController } from './routes/tasks/task-controller.';
import { PrismaModule } from './infra/prisma.module';
import { CreateTaskService } from './routes/tasks/cases/create-task.service';
import { ListService } from './routes/tasks/cases/list.service';
import TaskModule from './routes/tasks/task.module';

@Module({
  imports: [PrismaModule, TaskModule],
  controllers: [ListController],
  providers: [CreateTaskService, ListService],
})
export class AppModule {}
