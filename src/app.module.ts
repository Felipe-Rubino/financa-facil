import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListController } from './routes/tasks/task-controller.';
import { PrismaModule } from './infra/prisma.module';
import { CreateTaskService } from './routes/tasks/cases/create-task.service';
import { ListService } from './routes/tasks/cases/list.service';
import TaskModule from './routes/tasks/task.module';
import { UserModule } from './routes/users/user.module';
import { UserController } from './routes/users/users.controller';
import { UserService } from './routes/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './routes/users/cases/user-login.service';
import { HashTools } from './tools/hash.tool';
import ProfileModule from './routes/profile/profile.module';
import { ProfilerController } from './routes/profile/profile.controller';
import { ProfileService } from './routes/profile/cases/create-profile.service';

@Module({
  imports: [PrismaModule, TaskModule, UserModule, ProfileModule],
  controllers: [ListController, UserController, ProfilerController],
  providers: [CreateTaskService, ListService, UserService, JwtService, AuthService, HashTools, ProfileService],
})
export class AppModule {}
