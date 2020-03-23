import {prop,modelOptions, Ref} from '@typegoose/typegoose';
import {ApiProperty} from '@nestjs/swagger'
import {course} from './course.model';
@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class Episode{
    @ApiProperty({
        description: '课时名',
       
        example: 'user1',
      })
    @prop()
    name:string
    @ApiProperty({
        description: '课时目录',
       
        example: 'user1',
      })
    @prop()
    file:string
    @prop({ref:'Course'})
    course: Ref<course>
  }