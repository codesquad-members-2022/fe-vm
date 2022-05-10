import { rest } from 'msw';
import items from 'MockData/items';

const handlers = [
	rest.get(`/api/items`, (req, res, ctx) => {
		return res(ctx.status(200), ctx.delay(100), ctx.json(items));
	}),
];
export default handlers;
