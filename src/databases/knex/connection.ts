import knex from "knex";
import config from "../../config";
const knexCreated = <T>(name: string) =>
  knex<T>({
    client: "pg",
    connection: {
      host: config[name].host,
      port: config[name].port,
      user: config[name].user,
      password: config[name].password,
    },
  });

export default knexCreated;

