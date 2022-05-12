import { rest } from 'msw';

const USER = [
  rest.get('/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json());
  }),
];

const handlers = [...USER];

export default handlers;
