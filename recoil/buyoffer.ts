import { atom } from 'recoil';
import { BuyOfferType } from 'types/recoil/buyoffer';

export const buyoffer = atom<BuyOfferType>({
  key: 'salesPost',
  default: {
    id: 0,
    imageUrl: '',
    price: 0,
    salesOption: 0,
    productCount: '',
    description: '',
    status: 0,
    shippingOption: {
      name: '',
      price: 0,
    },
  },
});
