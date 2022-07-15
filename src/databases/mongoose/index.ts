import { Category, TombRaider } from "../../schema/user";
import connect from "./connection";

export const TombRaiderDB =
  connect("tombRaider").collection<TombRaider>("TombRaider");

export const CategoryDB = 
  connect("eiParca").collection<Category>("Category");
