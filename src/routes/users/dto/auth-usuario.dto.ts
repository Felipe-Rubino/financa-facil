import { ApiProperty } from "@nestjs/swagger";

export class LoginAuthDTO {
    @ApiProperty({
        required: true,
    })
    LOGIN: string;

    @ApiProperty({
        required: true,
    })
    PASSWORD: string;
}