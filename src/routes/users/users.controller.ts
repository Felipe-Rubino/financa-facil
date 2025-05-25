import { Body, Controller, Post } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CreateUserDTO } from "./dto/create-usuario.dto";
import { UserService } from "./users.service";
import { AuthService } from "./cases/user-login.service";
import { LoginAuthDTO } from "./dto/auth-usuario.dto";

@ApiTags('User')
@ApiBearerAuth()
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly loginService: AuthService
    ) {}

    @Post('/create')
    async createUser(
        @Body() body: CreateUserDTO
    ) {
        return this.userService.execute(body);
    }

    @Post('/auth')
    async authUser(
        @Body() body: LoginAuthDTO
    ) {
        return this.loginService.execute(body);
    }
}