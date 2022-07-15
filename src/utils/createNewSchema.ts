import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { ResponseWithMerged } from "../resolvers/sqlResolver";
import { ResponseWithBothesolvers } from "../resolvers/twoDB";

export const createSchema = async (): Promise<GraphQLSchema> => {
  return await buildSchema({
    resolvers: [ResponseWithBothesolvers, ResponseWithMerged],
  });
};
