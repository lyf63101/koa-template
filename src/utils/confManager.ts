import yaml from "yaml";
import fse from "fs-extra";
import { Dialect } from "sequelize";

class ConfigurationManager {
  private configFileName: string;
  private globalConfFile: string;
  private configs: {
    BASE: {
      Port: string;
      Address: string;
      NODE_ENV: string;
      MongoURI: string;
      JwtSecret: string;
    };
    MYSQL: {
      DataBase: string;
      Host: string;
      User: string;
      Password: string;
      Port: string;
      Dialect: Dialect;
    };
  };
  constructor(configFileName = "config.yml") {
    this.configFileName = configFileName;
    this.globalConfFile = fse.readFileSync(configFileName, "utf8");
    this.configs = yaml.parse(this.globalConfFile);
  }
  getConfig() {
    return this.configs;
  }
  getBaseConf() {
    return this.configs["BASE"];
  }
  getDBConf() {
    return this.configs["MYSQL"];
  }
}

export const confManager = new ConfigurationManager();
export default confManager;
