import { Injectable } from '@nestjs/common';
import { CreateFanpageBasicoDto } from './dto/create-fanpage-basico.dto';
import { CreateFanpagePerfeccionamientoDto } from './dto/create-fanpage-perfeccionamiento.dto';
import { Model } from 'mongoose';
import { FanpageBasicEntity } from './entities/fanpageBasic.entity';
import { FanpagePerfecEntity } from './entities/fanpagePerfec.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FanpageService {

    constructor(
        @InjectModel(FanpageBasicEntity.name)
        private readonly courseBasicEntity:Model<FanpageBasicEntity>,

        @InjectModel(FanpagePerfecEntity.name)
        private readonly coursePerfecEntity:Model<FanpagePerfecEntity>
    ){}


    async createCourseBasic(createFanpageBasicoDto:CreateFanpageBasicoDto){

        await this.courseBasicEntity.deleteMany();
        
        const c_basic= await this.courseBasicEntity.create(createFanpageBasicoDto);

        return c_basic;

    }


    async createCoursePerfec(createFanpagePerfeccionamientoDto:CreateFanpagePerfeccionamientoDto){

        await this.coursePerfecEntity.deleteMany();

        const c_perfec= await this.coursePerfecEntity.create(createFanpagePerfeccionamientoDto);

        return c_perfec;

    }
    
}
