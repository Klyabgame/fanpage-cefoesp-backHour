import {PartialType} from '@nestjs/mapped-types'
import { CreateFanpageBasicoDto } from "./create-fanpage-basico.dto";

export class UpdateFanpageBasicDTO extends PartialType(CreateFanpageBasicoDto){}