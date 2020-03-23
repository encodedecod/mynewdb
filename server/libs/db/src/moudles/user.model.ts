import {prop,modelOptions} from '@typegoose/typegoose';
import {ApiProperty} from '@nestjs/swagger'
import { from } from 'rxjs';
// 定义模型
//读取时间
@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class user{
    @ApiProperty({
        description: '用户名',
       
        example: 'user1',
      })
 @prop()
 username:string




 @ApiProperty({
    description: '密码',
   
    example: 'pass1',
  })
 @prop()
 password:string
}
