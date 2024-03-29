import KoaRouter from "koa-router";
import { userController } from "@controller";
import Application from "koa";
import applyGraphql from "@src/graphql";

const router = new KoaRouter();

export const applyRouter = (app: Application) => {
  router.get("/user/info", userController.getUserInfo);
  router.post("/user/info", userController.setUserInfo);

  applyGraphql(app, router);
  app.use(router.routes()).use(router.allowedMethods());
};
export default applyRouter;
