import { rest } from 'msw';
import { salesPostType } from 'types/recoil/salesPost';

// POST /salespost (판매글 등록)
export const salespostHandlers = [
  rest.post<salesPostType>('/salespost', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        status: 201,
        message: '판매글 생성 성공',
        data: {
          id: 3,
          mainImageUrl: req.body.mainImage,
          productCount: req.body.productCount,
          salesOption: req.body.salesOption,
          priceOption: req.body.priceOption,
          price: req.body.price,
          certificationWord: req.body.certificationWord,
          description: req.body.certifications,
          status: req.body.status,
          shippingOptions: [...req.body.shippingOptions],
        },
      }),
    );
  }),
];
