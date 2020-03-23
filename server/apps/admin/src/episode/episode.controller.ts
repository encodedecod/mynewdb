import { Controller, Get } from '@nestjs/common';
import {Crud} from 'nestjs-mongoose-crud';
import {Episode} from '@libs/db/moudles/episode.model'
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import {ReturnModelType} from '@typegoose/typegoose'
import { course } from '@libs/db/moudles/course.model';
//指定模型
@Crud({
    model:Episode
})
@ApiTags('课时')
@Controller('episode')
export class EpisodeController {
    constructor(
        //注入模型
        @InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>, 
        @InjectModel(course) private readonly coursemodel: ReturnModelType<typeof course>
        ){}

@Get('option')
async option(){
    const courses = (await this.coursemodel.find()).map(v=>({
        label:v.name,
        value:v._id
    }))
    return{
      
            title:'课时管理',
            translate:false,
            column:[
           {prop:'course',label:'所属课程',type:'select',dicData:courses, sortable:true,search:true,regex:true},
              {prop:'name',label:'课时名称',span:24},
              {prop:'file',label:'视频文件',listType:'picture-img',type:'upload',action:'upload'}

            ]
        
    }
}
}
