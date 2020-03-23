import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import {TypegooseModule} from 'nestjs-typegoose'
//导入全局模型
import {user} from './moudles/user.model'
import { course } from './moudles/course.model';
import { Episode } from './moudles/episode.model';
const models=TypegooseModule.forFeature([
  user,course,Episode
])
@Global()
@Module({
  
  //引入连接数据库模块

  imports:[
    TypegooseModule.forRootAsync({
      useFactory(){
        return{
          uri:process.env.DB,
          useNewUrlParser:true,
          useUnifiedTopology:true,
          useCreateIndex:true,
          useFindAndModify:true
        }
      }
    }),
  //   TypegooseModule.forRoot(process.env.DB,{
  //   useNewUrlParser:true,
  //   useUnifiedTopology:true,
  //   useCreateIndex:true,
  //   useFindAndModify:true
  // }),
    models],
  providers: [DbService],
  exports: [DbService,models],
})
export class DbModule {}
