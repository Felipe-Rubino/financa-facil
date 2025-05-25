import { Global, Module, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "generated/prisma";


export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    async onModuleInit() {
        try {
            await this.$connect();
        } catch(error) {
            console.error(error);
        }
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
}
@Global()
@Module({
    providers: [
        {
            provide: 'PRISMA',
            useFactory: () => {
                const prisma = new PrismaService();
                return prisma;
            }
        },
    ],
    exports: ['PRISMA']
})
export class PrismaModule {}