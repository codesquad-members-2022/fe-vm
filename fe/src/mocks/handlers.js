import { API, API_ROOT_URL } from 'constant/route';
import { rest } from 'msw';
import randomProducts from './products/randomProducts';

const Products = [
  rest.get(API_ROOT_URL + API.GET_PRODUCTS, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(randomProducts));
  }),
];

const handlers = [...Products];

export default handlers;
