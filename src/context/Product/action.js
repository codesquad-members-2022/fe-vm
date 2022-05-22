import { getProductsData } from 'api';
import API_URL from 'constants/apiUrl';
import getMockData from 'mock';

/* Type */
export const INIT_PRODUCT = 'initProduct';
export const BUY_PRODUCT = 'buyProduct';

/* Dispatch Action */
const initProduct = async dispatch => {
  let productData;
  try {
    productData = await getProductsData();
  } catch (error) {
    const { products } = API_URL;
    productData = getMockData(products);
  }

  dispatch({ type: INIT_PRODUCT, payload: productData });
};

const buyProduct = (dispatch, selectedId) => {
  dispatch({ type: BUY_PRODUCT, payload: { selectedId } });
};

export const dispatchAction = {
  initProduct,
  buyProduct,
};
