# fe-vm

## 웹 자판기 프로젝트

### State Reducer 패턴

장점: 제어권 많이 위임 할수 있다

단점: 구현이 복잡하다, 가독성이 안좋다

특징: Custom Hook 패턴과 비슷하지만 사용자는 reducer에 정의를 다할수 있다



적용 이후 

```javaScript

const currentMoneyReducer = (state, action) => {
  switch (action.type) {
    case 'decrease':
      return state - action.income;

    case 'increase':
      return state + action.income;
    default:
      throw new Error(`UserAccount 잘못된 액션입력입니다.${action.type}`);
  }
};

const insertedMoneyReducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return state + action.income;

    case 'refund':
      return 0;

    default:
      throw new Error(`UserAccount 잘못된 액션입력입니다.${action.type}`);
  }
};

export const UserAccountContext = props => {
  const [currentMoney, dispatchCurrentMoney] = useReducer(
    currentMoneyReducer,
    35650,
  );

  const [insertedMoney, dispatchInsertedMoney] = useReducer(
    insertedMoneyReducer,
    0,
  );
  return (
    <UserAccount.Provider
      value={{
        currentMoney,
        insertedMoney,
        dispatchCurrentMoney,
        dispatchInsertedMoney,
      }}
  )
};


import React, {useReducer} from 'react';

export const useAccount = (initial, reducer) => {
  const [userMoney, dispatchUserMoney] = useReducer(reducer, initial);

  const insertMoney = income => {
    dispatchUserMoney({type: 'insert', incomeMoney: income});
  };

  const refundMoney = () => {
    dispatchUserMoney({type: 'refund'});
  };

  const buyProduct = productPrice => {
    dispatchUserMoney({type: 'buy', incomeMoney: productPrice});
  };

  return {insertMoney, refundMoney, buyProduct, userMoney};
};


// 유저 계좌 컨텍스트 

const accountReducer = (state, action) => {
  switch (action.type) {
    case 'insert':
      return {
        currentMoney: state.currentMoney - action.incomeMoney,
        insertedMoney: state.insertedMoney + action.incomeMoney,
      };

    case 'refund':
      return {
        currentMoney: state.currentMoney + state.insertMoney,
        insertedMoney: 0,
      };

    case 'buy':
      return {
        currentMoney: state.currentMoney,
        insertMoney: state.insertMoney - action.incomeMoney,
      };

    default:
      throw new Error(`잘못된 액션 입력입니다. ${action.type}`);
  }
};

const accountReducer = (state, action) => {
  switch (action.type) {
    case 'insert':
      return {
        currentMoney: state.currentMoney - action.incomeMoney,
        insertedMoney: state.insertedMoney + action.incomeMoney,
      };

    case 'refund':
      return {
        currentMoney: state.currentMoney + state.insertMoney,
        insertedMoney: 0,
      };

    case 'buy':
      return {
        currentMoney: state.currentMoney,
        insertMoney: state.insertMoney - action.incomeMoney,
      };

    default:
      throw new Error(`잘못된 액션 입력입니다. ${action.type}`);
  }
};

export const UserAccountContext = props => {
  const {insertMoney, refundMoney, buyProduct, userMoney} = useAccount(
    {
      currentMoney: 36450,
      insertedMoney: 0,
    },
    accountReducer,
  );

  return (
    <UserAccount.Provider
      value={{
        insertMoney,
        refundMoney,
        buyProduct,
        userMoney,
      }}
    >
      {props.children}
    </UserAccount.Provider>
  );
};

// 금액 투입 버튼.jsx

  const handleRefundBtn = () => {
    console.log(refundBtn.current);
    dispatchCurrentMoney({type: 'increase', income: refundBtn.current.value});
    dispatchInsertedMoney({type: 'refund'});
  };


const handleMoneyButton = (unit, currentMoney, insertMoney) => {
  if (currentMoney < unit) {
    return;
  }
  insertMoney(unit);
};

// 환불 버튼.jsx

      <MoneyBtn
        key={id}
        onClick={() =>
          handleMoneyButton(
            unit,
            currentMoney,
            dispatchCurrentMoney,
            dispatchInsertedMoney,
          )
        }
      >


<환불버튼 onClick={refundMoney}>
```