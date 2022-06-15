import confManager from "./confManager";

export const jwtSecret = confManager.getBaseConf().JwtSecret;

export const isDev = process.env.NODE_ENV === "development";
export const isProd = process.env.NODE_ENV === "production";

export const PORT = confManager.getBaseConf().Port;
export const MAX_DB_POOL = 80;
export const MIN_DB_POOL = 80;
export const DB_POOL_IDLE = 20000;
export const DB_POOL_ACQUIRE = 20000;
