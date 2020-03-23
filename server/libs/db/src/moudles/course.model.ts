import {prop,modelOptions,arrayProp,Ref} from '@typegoose/typegoose';
import {ApiProperty} from '@nestjs/swagger'
// import { Episode } from './episode.model';
// 定义模型
//读取时间
@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class course{
    @ApiProperty({
        description: '课程名称',
       
        example: 'user1',
      })
 @prop()
 name:string




 @ApiProperty({
    description: '封面图',
   
    example: 'pass1',
  })
 @prop()
 cover:string
 //视频资源,数组类型
//  @arrayProp({itemsRef:'Episode'})
//  episodes:Ref<Episode>
}
