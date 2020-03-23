import { Controller, Get, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import {FileInterceptor} from '@nestjs/platform-express'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // 将图片上传到upload
  @Post('upload')
  //鉴权拦截器
  @UseInterceptors(FileInterceptor('file'))
async upload(@UploadedFile('file') file){
 //将文件传到本地
  return file
  //  {
  //   url:`http://localhost:3000/uploads/${file.filename}`
  // }
}

}
