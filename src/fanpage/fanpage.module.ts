import { Module } from '@nestjs/common';
import { FanpageController } from './fanpage.controller';
import { FanpageService } from './fanpage.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseBasicSchema, FanpageBasicEntity } from './entities/fanpageBasic.entity';
import { CoursePerfecSchema, FanpagePerfecEntity } from './entities/fanpagePerfec.entity';

@Module({
  controllers: [FanpageController],
  providers: [FanpageService],
  imports:[
    MongooseModule.forFeature([
      {
        name:FanpageBasicEntity.name,
        schema:CourseBasicSchema,
      },
      {
        name:FanpagePerfecEntity.name,
        schema:CoursePerfecSchema,
      }
    ])
  ]
})
export class FanpageModule {}
