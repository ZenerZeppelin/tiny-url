import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type DomainDocument = Domain & Document

@Schema()
export class Domain {

    @Prop()
    domainName: string;

    //means for the first time in the 24 hours, not first time ever
    @Prop()
    firstVisited: Date;

    @Prop()
    timesVisited: number;
}

export const DomainSchema = SchemaFactory.createForClass(Domain);