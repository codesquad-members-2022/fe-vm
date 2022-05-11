import { rest } from 'msw';
import { items, coins } from 'MockData/data';

const handlers = [
	rest.get(`/api/items`, (req, res, ctx) => {
		return res(ctx.status(200), ctx.delay(100), ctx.json(items));
	}),
	rest.get(`/api/coins`, (req, res, ctx) => {
		return res(ctx.status(200), ctx.delay(100), ctx.json(coins));
	}),
];
export default handlers;
