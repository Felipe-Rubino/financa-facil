import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";


export class CreateUserDTO {
    @ApiProperty({
        required: true,
    })
    NOME: string;
    @ApiProperty({
        required: true,
    })
    EMAIL: string;
    @ApiProperty({
        required: true,
    })
    PASSWORD: string;

    @ApiProperty({
        required: true,
    })
    CELULAR: string;

    @ApiProperty({
        required: true,
        enum: ['ANDAMENTO', 'FINALIZADO', 'CANCELADO', 'PENDENTE'],
    })
    @Type(() => Number)
    CODPROF: number;

    @ApiProperty({
        required: true,
    })
    LOGIN: string;
}