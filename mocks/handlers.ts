import { rest } from 'msw';

const mock = ['먹기', '자기', '놀기'];

export const handlers = [
  // TODO: API 명세서에 따라 모킹 핸들러 설정

  // get 요청
  rest.get('/todos', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mock));
  }),

  // post 요청
  rest.post('/todos', (req, res, ctx) => {
    mock.push();
    return res(ctx.status(201));
  }),
];
