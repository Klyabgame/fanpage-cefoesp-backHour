import { Module } from '@nestjs/common';

import { FanpageModule } from './fanpage/fanpage.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ServeStaticModule.forRoot({
    rootPath: join(__dirname,'..','public'),
    exclude:['/api*']
  }),
  MongooseModule.forRoot('mongodb://localhost:27017/back-fanpage-cefoesp'),
  FanpageModule

],
  controllers: [],
  providers: [],
})
export class AppModule {
}
