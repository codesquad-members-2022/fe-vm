import productApi from 'api/product';
import { GET_PRODUCTS, GET_REST_UNITS } from './type';

export const divideBalance = (dispatch, changesUnits, totalBalance) => {
  const resetUnit = getRestUnit(changesUnits, totalBalance);
  dispatch({ type: GET_REST_UNITS, payload: resetUnit });
};

const getRestUnit = (units, totalBalance) => {
  const { resultArr: newChangesUnits } = [...units]
    .sort((prev, cur) => cur.unit - prev.unit)
    .reduce(
      ({ rest, resultArr }, cur) => {
        const taretCount = Math.floor(rest / cur.unit);
        const newRest = rest % cur.unit;
        return { rest: newRest, resultArr: [{ ...cur, count: taretCount }, ...resultArr] };
      },
      { rest: totalBalance, resultArr: [] },
    );
  return newChangesUnits;
};

export const getProducts = async dispatch => {
  const response = await productApi.getProducts();
  dispatch({ type: GET_PRODUCTS, payload: response.data });
};
