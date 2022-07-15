import { ObjectType, Field, ID } from "type-graphql";
import { prop } from "@typegoose/typegoose";

@ObjectType({ description: "TombRaider Model" })
export class TombRaider {
  @Field()
  @prop()
  name: string;

  @Field()
  @prop()
  year: string;
}

@ObjectType({ description: "TombRaider Model" })
export class Category {
  @Field()
  @prop()
  Name: string;

  @Field()
  @prop()
  IconName: string;
}

@ObjectType({ description: "ResponseWithBoth Model" })
export class ResponseWithBoth {
  @Field({ nullable: true })
  @prop()
  GameName?: string;

  @Field({ nullable: true })
  @prop()
  CategoryName?: string;

  @Field({ nullable: true })
  @prop()
  IconName?: string;

  @Field({ nullable: true })
  @prop()
  Year?: Date;
}
