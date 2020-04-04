import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from '@app/common';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodeModule } from './episode/episode.module';
import { MulterModule } from '@nestjs/platform-express';
const MAO = require('multer-aliyun-oss');
@Module({
  //引入数据库模块
  imports: [
    CommonModule,
    // 创建图片存储的位置
    MulterModule.registerAsync({
      useFactory(){
        return{
          storage: MAO({
            config: {
                region:process.env.OSS_REGION_NO,
                accessKeyId:process.env.OSS_ACCESS_KEY_ID,
                accessKeySecret:process.env.OSS_ACCESS_KEY_SECERT,
                bucket:process.env.OSS_BUCKET
            }
        })
        }
      }
    }),
   
     UsersModule, CoursesModule, EpisodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
