import { IsString } from "class-validator"

export class CreateFanpagePerfeccionamientoDto {

    @IsString()
    readonly inicio:string

    @IsString()
    readonly fin:string
}