# myonestack
全栈项目1
###安装nest脚手架o
cnpm i -g @nestjs/cli
###创建项目
nest new server
###创建子项目
nest g app admin
###启动子项目
nest start -w admin
###新建库
nest g lib db
@libs
###安装数据库
npm add nestjs-typegoose @typegoose/typegoose
###连接数据库，增加类型提示
npm add mongoose @types/mongoose
###在子项目中添加模块
nest g mo -p admin users
###在指定目录下添加控制器模块
nest g co -p admin users
###增加模块以实现快速删改
npm add nestjs-mongoose-crud
###安装接口配置器
npm add @nestjs/swagger swagger-ui-express
###创建vue
vue create admin
###安装element ui
vue add element

###安装路由
vue add router
###使用typescript
vue add typescript
###装拦截器，和提示器
npm add axios @types/axios
###安装动态表单
npm add vue-ele-formc
###安装快速增删改查工具
cnpm i @smallwei/avue -S
npm add @smallwei/avuec
###安装阿里云存储包
cnpm install --save multer-aliyun-oss
###配置环境变量的依赖
cnpm install --save multer-aliyun-oss
###创建新的文件夹,通用模块
nest g lib common