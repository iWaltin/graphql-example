import { Expense, Provider } from "../../schema/sql";
import knexCreated from "./connection";

export const ExpenseDB = knexCreated<Expense>("expense")("expense");
export const ProviderDB = knexCreated<Provider>("provider")("provider");
