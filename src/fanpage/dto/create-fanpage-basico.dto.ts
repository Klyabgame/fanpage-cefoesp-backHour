import { IsString, isString } from "class-validator"

export class CreateFanpageBasicoDto {

    @IsString()
    readonly inicio:string

    @IsString()
    readonly fin:string

}