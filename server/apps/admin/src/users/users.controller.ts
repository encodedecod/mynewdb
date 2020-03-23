import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { user } from '@libs/db/moudles/user.model';
import {Crud} from 'nestjs-mongoose-crud'

import { ApiTags } from '@nestjs/swagger';

//指定模型
@Crud({
    model:user
})
@Controller('users')
//定义标签
@ApiTags('用户')
export class UsersController {
    constructor(@InjectModel(user) private readonly model){

    }
 @Get('option')
    option(){
        return{
          
                title:'用户管理',
                column:[
               {prop:'username',label:'用户名称',sortable:true,search:true,regex:true},
                  {prop:'password',label:'用户密码'}
                ]
            
        }
    }  
}
