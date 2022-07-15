import mongoose from "mongoose";
import config from "../../config";

mongoose.Promise = global.Promise;

const createConnection = (name: string) =>
  mongoose.createConnection(config[name]);

export default createConnection;
