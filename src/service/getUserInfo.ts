import { Request } from "koa";

export const getUserInfo = async (req: Request) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve(null), 1000);
  });
  return "this is user info";
};

export default getUserInfo;
