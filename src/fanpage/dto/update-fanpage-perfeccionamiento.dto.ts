import { CreateFanpagePerfeccionamientoDto } from "./create-fanpage-perfeccionamiento.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateFanpagePerfecDTO extends PartialType(CreateFanpagePerfeccionamientoDto){}