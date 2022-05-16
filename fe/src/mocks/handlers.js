import { API, API_ROOT_URL } from 'constant/route';
import { rest } from 'msw';
import { managerChangeUnits, managerBalance } from './manager';
import { getRestUnit, orderProduct } from './controller/global';
import {
  addTargetProdcut,
  addTargetUnit,
  substractTargetProdcut,
  subStractTargetUnit,
} from './controller/manager';
import randomProducts from './products/randomProducts';
import { userBalance, userChangeUnits } from './user';

const mangerBalanceObj = getRestUnit(managerChangeUnits, managerBalance);
const globalProductsObj = { products: randomProducts };

const userBalanceObj = getRestUnit(userChangeUnits, userBalance);

const Users = [
  rest.get(API_ROOT_URL + API.GET_PRODUCTS, (req, res, ctx) => {
    const { products } = globalProductsObj;
    return res(ctx.status(200), ctx.json(products));
  }),
  rest.patch(API_ROOT_URL + API.PATCH_ORDER_PRODUCT, (req, res, ctx) => {
    const { products } = globalProductsObj;
    const productId = req.url.searchParams.get('id');
    const [targetProduct, error] = updateProduct(products, productId, substractTargetProdcut);
    if (error.isError) {
      return res(ctx.status(406), ctx.json({ errorMessage: error.msg }));
    }
    orderProduct(productId, products);
    return res(ctx.status(200), ctx.json(targetProduct));
  }),
  rest.get(API_ROOT_URL + API.GET_BALANCE, (req, res, ctx) => {
    const { changesUnits, totalBalance } = userBalanceObj;
    return res(ctx.status(200), ctx.json({ changesUnits, totalBalance }));
  }),
];

const Mangers = [
  // rest.get(API_ROOT_URL + API.GET_BALANCE, (req, res, ctx) => {
  //   const { changesUnits, totalBalance } = mangerBalanceObj;
  //   return res(ctx.status(200), ctx.json({ changesUnits, totalBalance }));
  // }),
  rest.patch(API_ROOT_URL + API.PATCH_ADD_BALANCE, (req, res, ctx) => {
    const unitId = Number(req.url.searchParams.get('id'));
    const { changesUnits, totalBalance } = mangerBalanceObj;
    const [newChangesUnits, newTotalBalance] = addTargetUnit(changesUnits, totalBalance, unitId);
    setManagerBalanceObj(newChangesUnits, newTotalBalance);
    return res(ctx.status(200), ctx.json({ newChangesUnits, newTotalBalance }));
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
      return res(ctx.status(406), ctx.json({ errorMessage: error.msg }));
    }
    setManagerBalanceObj(newChangesUnits, newTotalBalance);
    return res(ctx.status(200), ctx.json({ newChangesUnits, newTotalBalance }));
  }),
  rest.patch(API_ROOT_URL + API.PATCH_ADD_PRODUCT, (req, res, ctx) => {
    const { products } = globalProductsObj;
    const productId = req.url.searchParams.get('id');
    const [targetProduct, error] = updateProduct(products, productId, addTargetProdcut);
    if (error.isError) {
      return res(ctx.status(406), ctx.json({ errorMessage: error.msg }));
    }
    return res(ctx.status(200), ctx.json(targetProduct));
  }),
  rest.patch(API_ROOT_URL + API.PATCH_SUBSTRACT_PRODUCT, (req, res, ctx) => {
    const { products } = globalProductsObj;
    const productId = req.url.searchParams.get('id');
    const [targetProduct, error] = updateProduct(products, productId, substractTargetProdcut);
    if (error.isError) {
      return res(ctx.status(406), ctx.json({ errorMessage: error.msg }));
    }
    return res(ctx.status(200), ctx.json(targetProduct));
  }),
];

const handlers = [...Mangers, ...Users];

export default handlers;

function setGlobalProducts(products) {
  globalProductsObj.products = products;
}

function setManagerBalanceObj(units, balance) {
  mangerBalanceObj.changesUnits = units;
  mangerBalanceObj.totalBalance = balance;
}

function updateProduct(products, productId, callback) {
  const [newProducts, targetIndex, error] = callback(products, productId);
  setGlobalProducts(newProducts);
  const targetProduct = newProducts[targetIndex];
  return [targetProduct, error];
}
