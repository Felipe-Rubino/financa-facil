import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await createApp();
  configureApp(app);
  setupSwagger(app);
  await startServer(app);
}

async function createApp() {
  return await NestFactory.create(AppModule);
}

function configureApp(app: any) {
  app.use(cookieParser());
  app.enableCors()
}

function setupSwagger(app: any) {
  const config = createSwaggerConfig();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      displaySchemas: true,
    },
  });
}

function createSwaggerConfig() {
  return new DocumentBuilder()
    .setTitle('Documentação API')
    .setDescription('Documentação da API')
    .setVersion('1.0')
    .addTag('List')
    .build();
}

async function startServer(app: any) {
  const port = process.env.PORT || 3000;
  await app.listen(port)
  console.log('Documentação disponível em: http://localhost:' + port + '/api');
}
bootstrap();
