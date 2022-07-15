import moment from "moment";
import { Query, Resolver } from "type-graphql";
import { CategoryDB, TombRaiderDB } from "../databases/mongoose";
import { TombRaider, Category, ResponseWithBoth } from "../schema/user";

const mapper = (cat: Category, game: TombRaider): ResponseWithBoth => ({
  CategoryName: cat.Name,
  GameName: game.name,
  IconName: cat.IconName,
  Year: moment().toDate(),
});

@Resolver()
export class ResponseWithBothesolvers {
  @Query(() => ResponseWithBoth)
  async multiple(): Promise<ResponseWithBoth> {
    const db1 = await CategoryDB.findOne();
    const db2 = await TombRaiderDB.findOne();
    return mapper(db1, db2);
  }
}
