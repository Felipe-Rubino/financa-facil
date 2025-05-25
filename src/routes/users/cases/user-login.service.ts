import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma.module";
import { LoginAuthDTO } from "../dto/auth-usuario.dto";
import { HashTools } from "src/tools/hash.tool";
import { JwtService } from "@nestjs/jwt";
import { randomUUID } from "crypto";

@Injectable()
export class AuthService {
    constructor(
        @Inject('PRISMA') private readonly prisma: PrismaService,
        private readonly hashTools: HashTools,
        private readonly jwtService: JwtService,
    ) {}

    async execute(body: LoginAuthDTO) {
        try {
            const user = await this.prisma.users.findUnique({
                where: {
                    LOGIN: body.LOGIN,
                },
            });
            console.log(user);
            if (!user) {
                throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
            }
            const isPasswordValid = await this.hashTools.compare(
                body.PASSWORD, 
                user.PASSWORD
            );
            if (!isPasswordValid) {
                throw new HttpException('Senha inválida', HttpStatus.UNAUTHORIZED);
            }
            let userPayload = {
                NOME: user.NOME,
                EMAIL: user.EMAIL,
                CELULAR: user.CELULAR,
                LOGIN: user.LOGIN,
                CODUSU: user.CODUSU,
            };
            const token = await this.jwtService.signAsync({
                CODUSU: userPayload.CODUSU,
                UUID: randomUUID(),
            }, {
                secret: process.env.JWT_SECRET,
                expiresIn: '24h',
            });
            return { user: userPayload, token: token };
            
        } catch (error) {
            throw new HttpException('Não foi possível autenticar o usuário', HttpStatus.NOT_FOUND);
        }
    }
}