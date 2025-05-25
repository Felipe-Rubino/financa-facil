import { Module } from "@nestjs/common";
import { ProfilerController } from "./profile.controller";
import { ProfileService } from "./cases/create-profile.service";


@Module({
    imports: [],
    controllers: [ProfilerController],
    providers: [ProfileService],
})
export default class ProfileModule {}