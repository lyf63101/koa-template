import "module-alias/register";
import moduleAlias from "module-alias";
import path from "path";
import { isDev, isProd } from "./constant";

const resolveDir = (dirPath: string) => path.resolve(__dirname, "../../", dirPath);

if (isDev) {
  moduleAlias.addAlias("@src", resolveDir("./src"));
  moduleAlias.addAlias("@controller", resolveDir("./src/controller"));
  moduleAlias.addAlias("@dao", resolveDir("./src/dao"));
  moduleAlias.addAlias("@middleware", resolveDir("./src/middleware"));
  moduleAlias.addAlias("@model", resolveDir("./src/model"));
  moduleAlias.addAlias("@router", resolveDir("./src/router"));
  moduleAlias.addAlias("@service", resolveDir("./src/service"));
  moduleAlias.addAlias("@utils", resolveDir("./src/utils"));
}

if (isProd) {
  moduleAlias.addAlias("@src", resolveDir("./dist"));
  moduleAlias.addAlias("@controller", resolveDir("./dist/controller"));
  moduleAlias.addAlias("@dao", resolveDir("./dist/dao"));
  moduleAlias.addAlias("@middleware", resolveDir("./dist/middleware"));
  moduleAlias.addAlias("@model", resolveDir("./dist/model"));
  moduleAlias.addAlias("@router", resolveDir("./dist/router"));
  moduleAlias.addAlias("@service", resolveDir("./dist/service"));
  moduleAlias.addAlias("@utils", resolveDir("./dist/utils"));
}
