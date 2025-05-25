import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber } from "class-validator";


export class ParamsTaskDTO {
    @ApiProperty({
        required: true,
    })
    @IsNumber()
    @Type(() => Number)
    CODUSU: number;
}