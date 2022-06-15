import { Request } from "koa";
import { AccountConfig } from "@model/AccountConfig";

export const setUserInfo = async (req: Request) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve(null), 1000);
  });
  const { userName, userAddress, account, privateKey, strategy, isEnable, maxMintTokenCnt } =
    req.body;
  const [actCfg, created] = await AccountConfig.findOrCreate({
    where: { userAddress }
  });
  actCfg.set({
    userName,
    account,
    privateKey,
    strategy,
    isEnable,
    maxMintTokenCnt
  });
  await actCfg.save();
  return actCfg.toJSON();
};

export default setUserInfo;
