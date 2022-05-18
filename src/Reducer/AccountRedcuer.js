import {MONEY_BUTTON_DATA} from '../Mocks/MoneyButtonData';

//TODO: 리팩토링 시급 시급!! 특히 input 보정 부분
export const accountReducer = (state, action) => {
  switch (action.type) {
    case 'insert':
      return {
        currentMoney: state.currentMoney - action.incomeMoney,
        insertedMoney: state.insertedMoney + action.incomeMoney,
        history: [...state.history, `${action.incomeMoney} 원 추가!`],
      };

    case 'refund':
      return {
        currentMoney: state.currentMoney + state.insertedMoney,
        insertedMoney: 0,
        history: [
          ...state.history,
          `${state.insertedMoney} 원 반환 되엇습니다.`,
        ],
      };

    case 'buy':
      return {
        currentMoney: state.currentMoney,
        insertedMoney: state.insertedMoney - action.incomeMoney,
        history: [
          ...state.history,
          `${action.product} 를 구매하셨습니다. 현재 투입금액: ${
            state.insertedMoney - action.incomeMoney
          }`,
        ],
      };

    case 'input':
      let currentMoney = state.currentMoney;
      const inputValue = +action.incomeMoney;
      const currentMoneyList = MONEY_BUTTON_DATA.map(list => {
        list.count = parseInt(currentMoney / list.unit);
        currentMoney = currentMoney % list.unit;
        return list;
      });

      if (inputValue > state.currentMoney) {
        return {
          ...state,
          history: [
            ...state.history,
            `${inputValue}원 은 현재금액 ${state.currentMoney}원 보다 높은 금액입니다.`,
          ],
        };
      }

      const checkedMoney = currentMoneyList.reduce(
        ({inputValue, saved, change}, {unit, count}, idx) => {
          const accCount = parseInt(inputValue / unit);
          if (accCount < count) {
            inputValue = inputValue % unit;
            saved += unit * accCount;
            currentMoneyList[idx].count = count - accCount;
          }

          if (accCount === count) {
            inputValue = inputValue % unit;
            saved += unit * accCount;
            currentMoneyList[idx].count = 0;
          }

          if (accCount > count) {
            saved += unit * count;
            change = change + (accCount - count) * unit;
            currentMoneyList[idx].count = 0;
            inputValue = inputValue % unit;
          }
          return {inputValue, saved, change};
        },
        {inputValue, change: 0, saved: 0},
      );

      if (!checkedMoney.change) {
        return {
          currentMoney: state.currentMoney - inputValue,
          insertedMoney: inputValue,
          history: [...state.history, `${inputValue}원 추가!`],
        };
      }

      const currentMoneyListEntry = currentMoneyList.reverse().entries();
      for (const [idx, list] of currentMoneyListEntry) {
        const nextUnit = currentMoneyList.reverse()[idx + 1].unit;

        if (list.count > 0 && list.unit > checkedMoney.change) {
          return {
            currentMoney: state.currentMoney - (checkedMoney.saved + list.unit),
            insertedMoney: checkedMoney.saved + list.unit,
            history: [
              ...state.history,
              `${inputValue}원 투입하였지만 지갑 사정으로 인해 ${
                checkedMoney.saved + list.unit
              }원으로 보정 되셨습니다.`,
            ],
          };
        }

        checkedMoney.saved -= checkedMoney.saved % nextUnit;
      }

    default:
      throw new Error(`잘못된 액션 입력입니다. ${action.type}`);
  }
};
