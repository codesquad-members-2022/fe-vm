import {
  useEffect,
  useState,
  useRef,
  useReducer,
  createContext,
  useMemo,
  useCallback,
} from 'react';
import Header from 'components/Header';
import { debounce } from 'utils/util';
import VendingMachine from 'components/VendingMachine';
import Wallet from 'components/Wallet';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'components/App.Styled';

export const myContext = createContext();

const WALLET_INFO = [
  { unit: 10, number: 0 },
  { unit: 50, number: 1 },
  { unit: 100, number: 5 },
  { unit: 500, number: 5 },
  { unit: 1000, number: 2 },
  { unit: 5000, number: 2 },
  { unit: 10000, number: 1 },
  { total: 25050 },
];

const MENU_INFO = [
  {
    name: '맥주',
    src: '/images/beer.png',
    price: 500,
    number: 2,
  },
  {
    name: '뼈다귀',
    src: '/images/bone.png',
    price: 1000,
    number: 3,
  },
  {
    name: '빵',
    src: '/images/bread.png',
    price: 400,
    number: 1,
  },
  {
    name: '케이크',
    src: '/images/cupcake.png',
    price: 300,
    number: 3,
  },
  {
    name: '치즈',
    src: '/images/cheese.png',
    price: 900,
    number: 1,
  },
  {
    name: '칵테일',
    src: '/images/cocktail.png',
    price: 1200,
    number: 2,
  },
  {
    name: '커피',
    src: '/images/coffee.png',
    price: 1000,
    number: 4,
  },
  {
    name: '에너지 드링크',
    src: '/images/energy-drink.png',
    price: 1000,
    number: 5,
  },
  {
    name: '감자튀김',
    src: '/images/french-fries.png',
    price: 2000,
    number: 1,
  },
  {
    name: '과일',
    src: '/images/fruit.png',
    price: 1000,
    number: 0,
  },
  {
    name: '햄버거',
    src: '/images/hamburger.png',
    price: 7000,
    number: 2,
  },
  {
    name: '삼각김밥',
    src: '/images/onigiri.png',
    price: 600,
    number: 1,
  },
  {
    name: '피자',
    src: '/images/pizza.png',
    price: 1000,
    number: 2,
  },
  {
    name: '밥',
    src: '/images/rice-bowl.png',
    price: 500,
    number: 1,
  },
  {
    name: '사이다',
    src: '/images/soda-can.png',
    price: 1000,
    number: 2,
  },
  {
    name: '스파게티',
    src: '/images/spaguetti.png',
    price: 1000,
    number: 3,
  },
  {
    name: '탄산수',
    src: '/images/sparkling-water.png',
    price: 1200,
    number: 4,
  },
  {
    name: '타코',
    src: '/images/taco.png',
    price: 1000,
    number: 1,
  },
  {
    name: '붕어빵',
    src: '/images/taiyaki.png',
    price: 1000,
    number: 2,
  },
  {
    name: '물',
    src: '/images/water.png',
    price: 2000,
    number: 1,
  },
];

const MONEY_UNIT_INFO = [10000, 5000, 1000, 500, 100, 50, 10];

const ACTION_TYPE = {
  product: 'product',
  money: 'money',
  change: 'change',
};

const initialState = {
  message: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.product:
      return { message: state.message.concat(`${action.name} 선택`) };
    case ACTION_TYPE.money:
      return {
        message: state.message.concat(
          `${action.money.toLocaleString()}원 투입`,
        ),
      };
    case ACTION_TYPE.change:
      return {
        message: state.message.concat(
          `잔돈 ${action.changeMoney.toLocaleString()}원 반환`,
        ),
      };
    default:
      return;
  }
}

const App = () => {
  const [walletInfo, setWalletInfo] = useState(null);
  const [menuInfo, setMenuInfo] = useState(null);
  const [inputMoney, setInputMoney] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);
  const [messageInfo, dispatch] = useReducer(reducer, initialState);
  const productSelectTimer = useMemo(() => debounce(), []);
  const autoChangeTimer = useMemo(() => debounce(), []);
  const input = useRef(false);
  const history = useRef([]);

  useEffect(() => {
    setWalletInfo(WALLET_INFO);
    setMenuInfo(MENU_INFO);
    setTotalMoney(WALLET_INFO[WALLET_INFO.length - 1].total);
  }, []);

  useEffect(() => {
    autoChangeTimer(changeWhenNotBehavior, 5000);
  }, [inputMoney]);

  function updateTotalMoney(copy, index, str) {
    switch (str) {
      case 'wallet':
        return setTotalMoney(totalMoney - copy[index].unit);
      case 'menu':
        return setInputMoney(inputMoney - copy[index].price);
      default:
        return;
    }
  }

  function updateInfo(index, info, str) {
    const copy = JSON.parse(JSON.stringify(info));

    copy[index] =
      copy[index].number > 0
        ? {
            ...info[index],
            number: info[index].number - 1,
          }
        : { ...info[index] };
    updateTotalMoney(copy, index, str);

    return copy;
  }

  function changeWhenNotBehavior() {
    if (!input.current) handleClickChange();
  }

  const handleClickMoney = useCallback(
    (money, index) => {
      if (walletInfo[index].number > 0) {
        setInputMoney(prev => prev + money);
        setWalletInfo(prev => updateInfo(index, prev, 'wallet'));
        dispatch({ type: ACTION_TYPE.money, money: money });
        history.current = history.current.concat(index);
      }
    },
    [updateInfo],
  );

  const handleClickProduct = useCallback(
    (name, index) => {
      if (
        menuInfo[index].number > 0 &&
        menuInfo[index].price <= inputMoney &&
        inputMoney > 0
      ) {
        input.current = true;
        productSelectTimer(purchaseProduct.bind(null, name, index), 2000);
      }
    },
    [menuInfo, inputMoney, purchaseProduct],
  );

  function updateWalletInfoWhenChange() {
    const copy = JSON.parse(JSON.stringify(walletInfo));

    history.current.forEach(historyLog => (copy[historyLog].number += 1));
    setTotalMoney(
      copy
        .filter(moneyUnit => !moneyUnit.total)
        .reduce((acc, { unit, number }) => acc + unit * number, 0),
    );
    setWalletInfo(copy);
    history.current = [];
  }

  function handleClickChange() {
    if (inputMoney > 0) {
      setInputMoney(0);
      dispatch({ type: ACTION_TYPE.change, changeMoney: inputMoney });
      updateWalletInfoWhenChange();
    }
  }

  function calcChangeUnit(currentChange) {
    return MONEY_UNIT_INFO.map(unit => {
      const changeUnitNumber = parseInt(currentChange / unit);
      currentChange = parseInt(currentChange % unit);
      return changeUnitNumber;
    }).reverse();
  }

  function updateWalletInfoWhenPurchase(change) {
    let currentChange = change;

    const changeUnitsNumber = calcChangeUnit(currentChange);
    const copy = JSON.parse(JSON.stringify(walletInfo));
    const temp = copy
      .filter(moneyUnit => !moneyUnit.total)
      .map((moneyUnit, index) => {
        return {
          unit: moneyUnit.unit,
          number: moneyUnit.number + changeUnitsNumber[index],
        };
      });
    const sumMoney = temp.reduce(
      (acc, { unit, number }) => acc + unit * number,
      0,
    );
    temp[temp.length] = copy[temp.length];
    setWalletInfo(temp);
    setTotalMoney(sumMoney);
  }

  function purchaseProduct(name, index) {
    const change = inputMoney - menuInfo[index].price;

    setMenuInfo(updateInfo(index, menuInfo, 'menu'));
    dispatch({ type: ACTION_TYPE.product, name: name });
    dispatch({
      type: ACTION_TYPE.change,
      changeMoney: change,
    });
    updateWalletInfoWhenPurchase(change);
    setInputMoney(0);
    input.current = false;
    history.current = [];
  }

  return (
    <>
      <Header />
      <Container>
        <myContext.Provider value={{ inputMoney, handleClickProduct }}>
          <Routes>
            <Route
              path="/fe-vm/"
              element={
                <VendingMachine
                  menuInfo={menuInfo}
                  handleClickChange={handleClickChange}
                  messageInfo={messageInfo}
                />
              }
            />
            <Route
              path="/fe-vm/wallet"
              element={
                <Wallet
                  walletInfo={walletInfo}
                  totalMoney={totalMoney}
                  handleClickMoney={handleClickMoney}
                />
              }
            />
          </Routes>
        </myContext.Provider>
      </Container>
    </>
  );
};

export default App;
