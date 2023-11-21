import "./utils/moduleAlias";
import Koa from "koa";
import { initDB } from "@dao";
import applyMiddle from "@middleware";
import applyRouter from "@router";
import { PORT } from "@utils/constant";

const app = new Koa();

applyMiddle(app);
applyRouter(app);

initDB()
  .then(() => {
    return new Promise((resolve, _reject) => {
      app.listen(PORT, () => resolve(PORT));
    });
  })
  .then((port) => {
    console.log(`koa app is running at port ${port}`);
  });
