import constants from "utils/constants";
import numberUtil from "utils/numberUtil";

const { seperateThousands } = numberUtil;
const { CURRENCY } = constants;

const insertMoneyHelper = {
  getInsertMoneyMessage(money) {
    return `${seperateThousands(money)} ${CURRENCY} 투입되었습니다.`;
  },
};

export default insertMoneyHelper;
