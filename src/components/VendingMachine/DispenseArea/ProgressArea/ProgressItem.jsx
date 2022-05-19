import { memo } from "react";

import constants from "utils/constants";
import numberUtil from "utils/numberUtil";

const { CURRENCY } = constants;
const { seperateThousands } = numberUtil;

const getProgressString = ({ type, money, product }) => {
  const currentMoney = `${seperateThousands(money)}${CURRENCY}`;
  let progressString = "";

  switch (type) {
    case "insert":
      return `${currentMoney} 투입`;
    case "purchase":
      progressString += `${product} 구입 (${currentMoney} 사용)`;
    // eslint-disable-next-line no-fallthrough
    case "return":
      progressString += "\n";
      progressString += `${
        product ? "잔돈" : "투입 금액"
      } ${currentMoney} 반환`;
      return progressString;
    default:
      return progressString;
  }
};

const ProgressItem = ({ progress }) => {
  return <li>{getProgressString(progress)}</li>;
};

export default memo(ProgressItem);
