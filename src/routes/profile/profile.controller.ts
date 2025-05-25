import { Controller, Post } from "@nestjs/common";
import { ProfileService } from "./cases/create-profile.service";

@Controller('profile')
export class ProfilerController {
    constructor(
        private readonly profileService: ProfileService
    ) {}

    @Post('initial')
    async initial() {
        return this.profileService.createProfile();
    }
}