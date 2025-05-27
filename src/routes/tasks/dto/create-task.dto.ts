import { ApiProperty } from "@nestjs/swagger";
import { IsBase64, IsString } from "class-validator";


export class CreateTaskDTO {
    @ApiProperty({
        required: true,
    })
    @IsString()
    TAREFA_TITULO: string;
    
    @ApiProperty({
        required: true,
    })
    @IsString()
    TAREFA_DESCRICAO: string;

    @ApiProperty({
        required: true,
        enum: ['ANDAMENTO', 'FINALIZADO', 'CANCELADO', 'PENDENTE'],
    })
    @IsString()
    STATUS: 'ANDAMENTO' | 'FINALIZADO' | 'CANCELADO' | 'PENDENTE';

    @ApiProperty({
        required: true,
    })
    @IsBase64()
    IMAGEM: string;
}