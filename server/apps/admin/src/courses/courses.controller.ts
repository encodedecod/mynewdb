import { Controller, Get } from '@nestjs/common';
import {Crud} from 'nestjs-mongoose-crud';
import {course} from '@libs/db/moudles/course.model'
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import {ReturnModelType} from '@typegoose/typegoose'
//指定模型
@Crud({
    model:course
})
@ApiTags('课程')
@Controller('courses')
export class CoursesController {
    constructor(
        @InjectModel(course) private readonly model: ReturnModelType<typeof course> 
    ){}
    //将数据存到服务端。一边修改
@Get('option')
option(){
    return{
      
            title:'课程管理',
            column:[
           {prop:'name',label:'课程名称',sortable:true,search:true,regex:true,row:true},
              {prop:'cover',label:'课程封面',type:'upload',listType:'picture-img',row:true,action:'upload',width:120}
            ]//action:'upload',width:120
        
    }
}
}

