import { Inject, Injectable } from "@nestjs/common";
import { Prisma } from "generated/prisma";
import { PrismaService } from "src/infra/prisma.module";


@Injectable()
export class ProfileService {
    constructor(
        @Inject('PRISMA') private readonly prisma: PrismaService
    ) { }

    async createProfile() {
        try {
            let listProfile: string[] = [];

            listProfile.push('USER')
            listProfile.push('ADMIN')
            listProfile.push('SUPERADMIN')

            for(let profile of listProfile) {
                await this.prisma.profile.create({
                    data: {
                        PERFIL: profile,
                    }
                });
            }
            

        } catch (error) {
            console.error(error);
            throw new Error('Error creating profile');
        }
    }
}