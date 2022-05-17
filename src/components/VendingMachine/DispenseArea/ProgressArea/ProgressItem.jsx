import { memo } from "react";

import constants from "utils/constants";
import numberUtil from "utils/numberUtil";

const { CURRENCY } = constants;
const { seperateThousands } = numberUtil;

const getProgressString = ({ type, money, product }) => {
  const currentMoney = `${seperateThousands(money)}${CURRENCY}`;
  let string = "";

  switch (type) {
    case "insert":
      return `${currentMoney} 투입`;
    case "purchase":
      string += `${product} 구입 (${currentMoney} 사용)`;
    // eslint-disable-next-line no-fallthrough
    case "return":
      string += "\n";
      string += `${product ? "잔돈" : "투입 금액"} ${currentMoney} 반환`;
      return string;
    default:
      break;
  }

  return type + money;
};

const ProgressItem = ({ progress }) => {
  return <li>{getProgressString(progress)}</li>;
};

export default memo(ProgressItem);
