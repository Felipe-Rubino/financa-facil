import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { UserService } from "./users.service";
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "./cases/user-login.service";
import { HashTools } from "src/tools/hash.tool";


@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService, JwtService, AuthService, HashTools],
})
export class UserModule {}