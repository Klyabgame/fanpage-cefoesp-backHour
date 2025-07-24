import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class FanpageBasicEntity extends Document{

    @Prop({
        required:true
    })
    inicio:string;

    @Prop({
        required:true
    })
    fin:string;
}

export const CourseBasicSchema=SchemaFactory.createForClass(FanpageBasicEntity);