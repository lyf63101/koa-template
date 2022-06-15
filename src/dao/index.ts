import { Sequelize } from "sequelize";
import confManager from "@utils/confManager";
import { MAX_DB_POOL, MIN_DB_POOL, DB_POOL_IDLE, DB_POOL_ACQUIRE } from "@utils/constant";
import defineModel from "@model";

const dbConfig = confManager.getDBConf();
const validateConfig = () => {
  if (/[^0-9]/.test(dbConfig.Port)) {
    throw new Error("db config error, port must be a number");
  }
};
validateConfig();

const port = Number(dbConfig.Port);
const database = dbConfig.DataBase;
const username = dbConfig.User;
const password = dbConfig.Password;
const host = dbConfig.Host;
const dialect = dbConfig.Dialect;

export const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect,
  pool: {
    max: MAX_DB_POOL,
    min: MIN_DB_POOL,
    idle: DB_POOL_IDLE,
    acquire: DB_POOL_ACQUIRE
  },
  logging: process.env.NODE_ENV === "debug"
});
process.on("exit", () => {
  sequelize.close();
});

export const initDB = async () => {
  try {
    defineModel(sequelize);
    sequelize.authenticate();
    console.log(`Connection of ${dialect} has been established successfully.`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw new Error();
  }
};

export default { initDB, sequelize };
