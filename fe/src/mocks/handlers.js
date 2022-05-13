import { API, API_ROOT_URL } from 'constant/route';
import { rest } from 'msw';
import { defaultChangeUnits, defaultBalance } from './balance';
import { getRestUnit, orderProduct } from './controller/global';
import {
  addTargetProdcut,
  addTargetUnit,
  substractTargetProdcut,
  subStractTargetUnit,
} from './controller/manager';
import randomProducts from './products/randomProducts';

const globalBalanceObj = getRestUnit(defaultChangeUnits, defaultBalance);
const globalProductsObj = { products: randomProducts };

const Global = [
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
];

const Mangers = [
  rest.get(API_ROOT_URL + API.GET_BALANCE, (req, res, ctx) => {
    const { changesUnits, totalBalance } = globalBalanceObj;
    return res(ctx.status(200), ctx.json({ changesUnits, totalBalance }));
  }),
  rest.patch(API_ROOT_URL + API.PATCH_ADD_BALANCE, (req, res, ctx) => {
    const unitId = Number(req.url.searchParams.get('id'));
    const { changesUnits, totalBalance } = globalBalanceObj;
    const [newChangeUnits, newTotalBalance] = addTargetUnit(changesUnits, totalBalance, unitId);
    setGlobalBalanceObj(newChangeUnits, newTotalBalance);
    return res(ctx.status(200), ctx.json({ newChangeUnits, newTotalBalance }));
  }),
  rest.patch(API_ROOT_URL + API.PATCH_SUBSTRACT_BALANCE, (req, res, ctx) => {
    const unitId = Number(req.url.searchParams.get('id'));
    const { changesUnits, totalBalance } = globalBalanceObj;
    const [newChangeUnits, newTotalBalance, error] = subStractTargetUnit(
      changesUnits,
      totalBalance,
      unitId,
    );
    if (error.isError) {
      return res(ctx.status(406), ctx.json({ errorMessage: error.msg }));
    }
    setGlobalBalanceObj(newChangeUnits, newTotalBalance);
    return res(ctx.status(200), ctx.json({ newChangeUnits, newTotalBalance }));
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

const handlers = [...Global, ...Mangers];

export default handlers;

function setGlobalProducts(products) {
  globalProductsObj.products = products;
}

function setGlobalBalanceObj(units, balance) {
  globalBalanceObj.changesUnits = units;
  globalBalanceObj.totalBalance = balance;
}

function updateProduct(products, productId, callback) {
  const [newProducts, targetIndex, error] = callback(products, productId);
  setGlobalProducts(newProducts);
  const targetProduct = newProducts[targetIndex];
  return [targetProduct, error];
}
