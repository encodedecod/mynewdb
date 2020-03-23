import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express'
//使用api
async function bootstrap() {
  //声明基于Express
  const app = await NestFactory.create<NestExpressApplication>(AppModule);


  //允许跨域
app.enableCors();
// 规定传入地址
// app.useStaticAssets('uploads',{
//   //添加前缀
//   prefix:'/uploads'
// })
  const options = new DocumentBuilder()
    .setTitle('后台管理api')
    .setDescription('供后台服务api')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  const PORT=process.env.ADMIN_PORT || 3002
  await app.listen(PORT);
  console.log(`http://localhost:${PORT}/api-docs`)
}
bootstrap();