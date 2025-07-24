import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class FanpagePerfecEntity extends Document{

    @Prop({
        required:true
    })
    inicio:string;

    @Prop({
        required:true
    })
    fin:string;
}

export const CoursePerfecSchema=SchemaFactory.createForClass(FanpagePerfecEntity);