import { API, API_ROOT_URL } from 'constant/route';
import { rest } from 'msw';
import { addTargetUnit, getRestUnit, orderProduct, subStractTargetUnit } from './controller/user';
import { addTargetProduct, substractTargetProduct } from './controller/product';
import randomProducts from './products/randomProducts';
import {
  userBalance,
  defaultChangeUnits,
  userDefaultInfo,
  defaultMangerUnits,
  managerBalance,
} from './user';

const mangerBalanceObj = { changesUnits: defaultMangerUnits, totalBalance: managerBalance };
const globalProductsObj = { products: randomProducts };
const userBalanceObj = getRestUnit(defaultChangeUnits, userBalance);

const Users = [
  rest.get(API_ROOT_URL + API.LOGIN, (req, res, ctx) => {
    const { changesUnits, totalBalance } = userBalanceObj;
    const userInfo = { ...userDefaultInfo, changesUnits, totalBalance };
    if (tiggerErrorRandomlyInDevMode(0.5)) {
      return res(ctx.delay(1000), ctx.status(406), ctx.json({ errorMessage: '로그인 실패!' }));
    }
    if (userInfo.isManager) {
      const { changesUnits: mangerUnits, totalBalance: managerTotalBalance } = mangerBalanceObj;
      const mangerInfo = {
        ...userDefaultInfo,
        changesUnits: mangerUnits,
        totalBalance: managerTotalBalance,
      };
      return res(
        ctx.delay(1000),
        ctx.status(200),
        ctx.cookie('auth-token', 'temp jwt'),
        ctx.json(mangerInfo),
      );
    }
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.cookie('auth-token', 'temp jwt'),
      ctx.json(userInfo),
    );
  }),
  rest.patch(API_ROOT_URL + API.PATCH_ADD_BALANCE, (req, res, ctx) => {
    const unitId = Number(req.url.searchParams.get('id'));
    const { changesUnits, totalBalance } = mangerBalanceObj;
    const [newChangesUnits, newTotalBalance] = addTargetUnit(changesUnits, totalBalance, unitId);
    setManagerBalanceObj(newChangesUnits, newTotalBalance);
    if (tiggerErrorRandomlyInDevMode(0.5)) {
      return res(
        ctx.delay(1000),
        ctx.status(406),
        ctx.json({ errorMessage: '거스름돈을 최신화하는 과정에서 에러가 발생했습니다.' }),
      );
    }
    return res(ctx.delay(1000), ctx.status(200), ctx.json({ newChangesUnits, newTotalBalance }));
  }),
  rest.patch(API_ROOT_URL + API.PATCH_SUBSTRACT_BALANCE, (req, res, ctx) => {
    const unitId = Number(req.url.searchParams.get('id'));
    const { changesUnits, totalBalance } = mangerBalanceObj;
    const [newChangesUnits, newTotalBalance, error] = subStractTargetUnit(
      changesUnits,
      totalBalance,
      unitId,
    );
    if (error.isError) {
      return res(ctx.delay(1000), ctx.status(406), ctx.json({ errorMessage: error.msg }));
    }
    setManagerBalanceObj(newChangesUnits, newTotalBalance);
    if (tiggerErrorRandomlyInDevMode(0.5)) {
      return res(
        ctx.delay(1000),
        ctx.status(406),
        ctx.json({ errorMessage: '거스름돈을 최신화하는 과정에서 에러가 발생했습니다.' }),
      );
    }
    return res(ctx.delay(1000), ctx.status(200), ctx.json({ newChangesUnits, newTotalBalance }));
  }),
];

const Products = [
  rest.get(API_ROOT_URL + API.GET_PRODUCTS, (req, res, ctx) => {
    const { products } = globalProductsObj;
    if (tiggerErrorRandomlyInDevMode(0.5)) {
      return res(
        ctx.delay(1000),
        ctx.status(406),
        ctx.json({ errorMessage: '상품 데이터를 가져올 수 없어요.' }),
      );
    }
    return res(ctx.delay(1000), ctx.status(200), ctx.json({ products }));
  }),
  rest.patch(API_ROOT_URL + API.PATCH_ADD_PRODUCT, (req, res, ctx) => {
    const { products } = globalProductsObj;
    const productId = req.url.searchParams.get('id');
    const [error, targetProduct] = updateProduct(products, productId, addTargetProduct);
    if (error.isError) {
      return res(ctx.delay(1000), ctx.status(406), ctx.json({ errorMessage: error.msg }));
    }
    if (tiggerErrorRandomlyInDevMode(0.5)) {
      return res(
        ctx.delay(1000),
        ctx.status(406),
        ctx.json({ errorMessage: '상품 수량을 최신화하는 과정에서 에러가 발생했습니다.' }),
      );
    }
    return res(ctx.delay(1000), ctx.status(200), ctx.json({ targetProduct }));
  }),
  rest.patch(API_ROOT_URL + API.PATCH_SUBSTRACT_PRODUCT, (req, res, ctx) => {
    const { products } = globalProductsObj;
    const productId = req.url.searchParams.get('id');
    const [error, targetProduct] = updateProduct(products, productId, substractTargetProduct);
    if (error.isError) {
      return res(ctx.delay(1000), ctx.status(406), ctx.json({ errorMessage: error.msg }));
    }
    if (tiggerErrorRandomlyInDevMode(0.5)) {
      return res(
        ctx.delay(1000),
        ctx.status(406),
        ctx.json({ errorMessage: '상품 수량을 최신화하는 과정에서 에러가 발생했습니다.' }),
      );
    }
    return res(ctx.delay(1000), ctx.status(200), ctx.json({ targetProduct }));
  }),
  rest.patch(API_ROOT_URL + API.PATCH_ORDER_PRODUCT, (req, res, ctx) => {
    const { inputChanges } = req.body;
    const inputMoney = inputChanges.reduce((acc, cur) => acc + cur, 0);
    const { products } = globalProductsObj;
    const productId = req.url.searchParams.get('id');
    const [error, newManagerUnits, newMangerTotalBalance, newUserUnits, newUserTotalBalance] =
      orderProduct(userBalanceObj, mangerBalanceObj, inputMoney, inputChanges, products, productId);
    if (error.isError) {
      return res(ctx.status(406), ctx.json({ errorMessage: error.msg }));
    }
    setManagerBalanceObj(newManagerUnits, newMangerTotalBalance);
    setUserBalanceObj(newUserUnits, newUserTotalBalance);
    const [updateProductError, targetProduct, newProducts] = updateProduct(
      products,
      productId,
      substractTargetProduct,
    );
    if (updateProductError.isError) {
      return res(
        ctx.delay(1000),
        ctx.status(406),
        ctx.json({ errorMessage: updateProductError.msg }),
      );
    }
    if (tiggerErrorRandomlyInDevMode(0.5)) {
      return res(
        ctx.delay(1000),
        ctx.status(406),
        ctx.json({ errorMessage: '상품 데이터를 가져올 수 없어요.' }),
      );
    }
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        newChangesUnits: newUserUnits,
        newTotalBalance: newUserTotalBalance,
        targetProduct,
        newProducts,
      }),
    );
  }),
];

const handlers = [...Products, ...Users];

export default handlers;

function tiggerErrorRandomlyInDevMode(percentage) {
  return Math.random() <= percentage;
}

function setGlobalProducts(products) {
  globalProductsObj.products = products;
}

function setManagerBalanceObj(units, balance) {
  mangerBalanceObj.changesUnits = units;
  mangerBalanceObj.totalBalance = balance;
}

function setUserBalanceObj(units, balance) {
  userBalanceObj.changesUnits = units;
  userBalanceObj.totalBalance = balance;
}

function updateProduct(products, productId, callback) {
  const [newProducts, targetIndex, error] = callback(products, productId);
  setGlobalProducts(newProducts);
  const targetProduct = newProducts[targetIndex];
  return [error, targetProduct, newProducts];
}
