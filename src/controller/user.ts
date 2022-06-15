import { Context, Next } from "koa";
import { getUserInfo, setUserInfo } from "@service";

class User {
  getUserInfo = async (ctx: Context, next: Next) => {
    const res = await getUserInfo(ctx.request);
    ctx.body = {
      data: res
    };
  };
  setUserInfo = async (ctx: Context, next: Next) => {
    const { userName } = ctx.request.body;
    console.log("ctx.request.body:", ctx.request.body);
    console.log("ctx.request:", ctx);
    try {
      ctx.assert(/^[a-zA-Z0-9]{6, 12}$/i.test(userName), 422, "Invalid username");
      const res = await setUserInfo(ctx.request);
      ctx.body = {
        success: true,
        data: res
      };
    } catch (error: any) {
      ctx.body = {
        success: false,
        error_msg: error.message
      };
      console.error(error);
    }
  };
}

export const userController = new User();
export default userController;
