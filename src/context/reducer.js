import { ACTION } from '@/constants/actionType';
import { INPUT_STATE, PRODUCT_ICON, TIMER } from '@/constants/constants';
import cash from '@/mocks/cash';
import product from '@/mocks/product';

const initialState = {
  cash,
  product,
  userCash: 0, // 유저가 보유한 돈
  insertedCash: 0, // 유저가 자판기에 현재 투입한 돈
  balance: 0, // 자판기에 있는 잔액
  userLog: [],
  inputState: INPUT_STATE.default,
  isInsertedCash: false,
  minutes: TIMER.initialMinites,
  seconds: TIMER.initialSeconds,
  timeoutId: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INSERT_CASH: {
      const { currentCash } = action.payload;
      const { balance, userLog, userCash } = state;
      if (currentCash > userCash) {
        return {
          ...state,
          inputState: INPUT_STATE.warning,
          userLog: [...userLog, `🚫You don't have enough money`],
        };
      }

      return {
        ...state,
        balance: +balance + +currentCash,
        inputState: INPUT_STATE.active,
        userCash: userCash - currentCash,
        userLog: [
          ...userLog,
          `🪙Insert $${currentCash}`,
          `💳Your Balance: ${+balance + currentCash}`,
        ],
        isInsertedCash: true,
      };
    }

    case ACTION.INPUT_ON_CHANGE: {
      const { insertedCash } = action.payload;
      return {
        ...state,
        insertedCash: insertedCash.replace(/(^0+)/, ''),
      };
    }

    case ACTION.ADD_MONEY: {
      const { unit } = action.payload;
      const { userCash, cash } = state;
      return {
        ...state,
        userCash: userCash + unit,
        cash,
      };
    }

    case ACTION.SELECT_ITEM: {
      clearTimeout(state.timeoutId);
      const { selectedItem, price, currentUserBalance } = action.payload;
      const { userLog } = state;

      return {
        ...state,
        balance: currentUserBalance,
        insertedCash: currentUserBalance,
        inputState: currentUserBalance <= 0 ? INPUT_STATE.default : INPUT_STATE.active,
        userLog: [
          ...userLog,
          `✅Select ${PRODUCT_ICON[selectedItem.category]}${selectedItem.name} ($${price})`,
          `💳Your Balance: $${currentUserBalance}`,
        ],
      };
    }

    case ACTION.RETURN_CASH: {
      const { userLog, userCash, insertedCash } = state;
      return {
        ...state,
        userCash: +userCash + +insertedCash,
        balance: 0,
        insertedCash: 0,
        inputState: INPUT_STATE.default,
        userLog: [...userLog, `↩️Return $${insertedCash}`],
        isInsertedCash: false,
      };
    }

    case ACTION.START_TIMER: {
      const { minutes, seconds } = initialState;
      const countDown = setInterval(() => {
        if (seconds > 0) {
          return { ...state, seconds: seconds - 1 };
        }

        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(countDown);
          } else {
            return { ...state, minutes: minutes - 1, seconds: 59 };
          }
        }
      }, 1000);
    }
  }
};

export { initialState, reducer };
