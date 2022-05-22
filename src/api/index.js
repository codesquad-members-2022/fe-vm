import API_URL from 'constants/apiUrl';
import { getData } from './core';

const { products, wallet } = API_URL;

const getProductsData = async () => await getData(products);
const getWalletData = async () => await getData(wallet);

export { getProductsData, getWalletData };
