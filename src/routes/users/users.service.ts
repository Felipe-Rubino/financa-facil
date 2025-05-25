import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma.module";
import { CreateUserDTO } from "./dto/create-usuario.dto";
import { JwtService } from "@nestjs/jwt";
import { HashTools } from "src/tools/hash.tool";
import { randomUUID } from "crypto";


@Injectable()
export class UserService {

    constructor(
        private jwtService: JwtService,
        @Inject('PRISMA') private readonly prisma: PrismaService
    ) { }

    async execute(body: CreateUserDTO) {
        try {
            const hashTools = new HashTools();
            const senhaHash = await hashTools.generate(body.PASSWORD);
            const userCreated = await this.prisma.users.create({
                data: {
                    NOME: body.NOME,
                    EMAIL: body.EMAIL,
                    PASSWORD: senhaHash,
                    CELULAR: body.CELULAR,
                    LOGIN: body.LOGIN,
                }
            });

            let userPayload = {
                NOME: userCreated.NOME,
                EMAIL: userCreated.EMAIL,
                CELULAR: userCreated.CELULAR,
                LOGIN: userCreated.LOGIN,
                CODUSU: userCreated.CODUSU,
            }

            const token = await this.jwtService.signAsync({
                CODUSU: userPayload.CODUSU,
                UUID: randomUUID(),
                },

                {
                    secret: process.env.JWT_SECRET,
                    expiresIn: '24h',
                }
            )
            return { user: userPayload, token: token };
        } catch (error) {
            console.error(error);
            throw new HttpException('Não foi possível criar o usuário', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}