import Application from "koa";
import koaJwt from "@middleware/koaJwt";
import koaBody from "@middleware/koaBody";
import { isDev, isProd } from "@utils/constant";

export const applyMiddle = (app: Application) => {
  app.use(koaBody);
  // app.use(koaJwt);
};

export default applyMiddle;
