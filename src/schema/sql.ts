import { Field, ObjectType } from "type-graphql";

@ObjectType({ description: "Expense Model" })
export class Expense {
  @Field()
  id?: string;

  @Field()
  user_id?: string;

  @Field()
  description?: string;

  @Field()
  value?: number;

  @Field()
  paid_at?: Date;

  @Field()
  due_date?: Date;

  @Field()
  months?: number;

  @Field()
  created_at?: Date;

  @Field()
  updated_at?: Date;

  @Field()
  deleted_at?: Date;
}

@ObjectType({ description: "Provider Model" })
export class Provider {
  @Field()
  id?: string;

  @Field()
  name?: string;

  @Field()
  integrator_id?: string;

  @Field()
  integrator_provider_id?: string;

  @Field()
  created_at?: Date;

  @Field()
  updated_at?: Date;

  @Field()
  deleted_at?: Date;
}

@ObjectType({ description: "Merged" })
export class Merged {
  @Field()
  user_id?: string;

  @Field()
  description?: string;

  @Field()
  value?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  created_at?: Date;

  @Field({ nullable: true })
  integrator_provider_id?: string;

  @Field({ nullable: true })
  integrator_id?: string;
}
