import { Query, Resolver } from "type-graphql";
import { ExpenseDB, ProviderDB } from "../databases/knex";
import { Expense, Merged, Provider } from "../schema/sql";

const mapper = (expense: Expense, provider: Provider): Merged => ({
  user_id: expense.user_id,
  description: expense.description,
  value: expense.value,
  name: provider.name,
  created_at: provider.created_at,
  integrator_provider_id: provider.integrator_provider_id,
  integrator_id: provider.integrator_id,
});

@Resolver()
export class ResponseWithMerged {
  @Query(() => Merged)
  async mergedSQL(): Promise<Merged> {
    const db1 = (await ExpenseDB.where(
      "user_id",
      "=",
      "35659e9f-36e3-46f2-84a9-2a50306d4b65"
    )).reverse();
    const db2 = await ProviderDB.where("name", "=", "bradesco");
    return mapper(db1[0], db2[0]);
  }
}
