import { Body, Controller, Get, Param, Post} from '@nestjs/common';
import { CreateFanpageBasicoDto } from './dto/create-fanpage-basico.dto';
import { FanpageService } from './fanpage.service';
import { CreateFanpagePerfeccionamientoDto } from './dto/create-fanpage-perfeccionamiento.dto';

@Controller('fanpage')
export class FanpageController {

    constructor(
        private readonly fanpageService:FanpageService
    ){}

    //basic
    @Get('/basic')
    getCourseBasic(){
        return this.fanpageService.getCourseBasic();
    }

    @Get('/perfec')
    getCoursePerfec(){
        return this.fanpageService.getCoursePerfec();
    }

    @Post('/basic')
    postCourseBasic(@Body() createFanpageBasicoDto:CreateFanpageBasicoDto){
        
        return  this.fanpageService.createCourseBasic(createFanpageBasicoDto);
    }

    @Post('/perfec')
    postCoursePerfec(@Body() createFanpagePerfeccionamientoDto:CreateFanpagePerfeccionamientoDto){
        return  this.fanpageService.createCoursePerfec(createFanpagePerfeccionamientoDto);
    }
    
}
