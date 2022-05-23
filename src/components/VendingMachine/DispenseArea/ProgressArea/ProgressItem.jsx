import { memo } from "react";

import constants from "utils/constants";
import numberUtil from "utils/numberUtil";

const { CURRENCY } = constants;
const { seperateThousands } = numberUtil;

const getProgressString = ({ type, money, product }) => {
  const currentMoney = `${seperateThousands(money)}${CURRENCY}`;

  let progressString = ``;
  switch (type) {
    case "insert":
      return `${currentMoney} 투입`;
    case "purchase":
      return `${product} 구입💰\n(${currentMoney} 사용)`;
    case "return":
      if (product) {
        progressString += `${product} 배출🎉`;
        progressString += `\n`;
      }
      if (!money) {
        progressString += `투입한 금액이 모두 사용되었습니다.`;
        return progressString;
      }
      progressString += `${product ? "잔돈" : "투입 금액"} ${currentMoney}반환`;
      return progressString;
    default:
      return progressString;
  }
};

const ProgressItem = ({ progress }) => {
  return <li>{getProgressString(progress)}</li>;
};

export default memo(ProgressItem);
