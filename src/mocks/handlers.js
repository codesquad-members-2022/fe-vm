import { rest } from 'msw';

const todos = ['test1', 'test2', 'test3'];

export const handlers = [
  rest.get('/test', (req, res, ctx) => {
    return res(ctx.delay(2000), ctx.status(200), ctx.json(todos));
  }),

  rest.post('/test', (req, res, ctx) => {
    todos.push(req.body);
    return res(ctx.delay(2000), ctx.status(201));
  }),
];
