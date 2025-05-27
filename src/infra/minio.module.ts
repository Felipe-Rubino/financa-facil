import { Global, Module, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import * as Minio from "minio";


export class MinioService implements OnModuleInit, OnModuleDestroy {
    private readonly minioClient: Minio.Client | any;  

    constructor() {
        try {
            this.minioClient = new Minio.Client({
                endPoint: process.env.MINIO_ENDPOINT || 'localhost',
                port: Number(process.env.MINIO_PORT),
                useSSL: false,
                accessKey: process.env.MINIO_ACCESS_KEY,
                secretKey: process.env.MINIO_SECRET_KEY,
            });
        } catch (error) {
            console.error('Error initializing Minio client:', error);
        }
    }
    onModuleInit() {
        console.log('Minio client initialized');
    }
    getClient(): Minio.Client {
        return this.minioClient;
    }

    async onModuleDestroy() {
        if (this.minioClient) {
            console.log('Minio client destroyed');
        }
    }
}
@Global()
@Module({
    providers: [
        {
            provide: 'MINIO',
            useFactory: () => {
                const minioService = new MinioService();
                return minioService;
            }
        }
    ],
    exports: ['MINIO'],
})
export class MinioModule {}