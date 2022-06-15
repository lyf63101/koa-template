import KoaJwt from "koa-jwt";
import jwt from "jsonwebtoken";
import { jwtSecret } from "@utils/constant";

export const koaJwt = KoaJwt({
  secret: jwtSecret
}).unless({
  path: ["/user/login"]
});

export default koaJwt;
