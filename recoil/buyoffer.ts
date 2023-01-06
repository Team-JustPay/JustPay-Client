import { atom } from 'recoil';
import { BuyOfferType } from 'types/recoil/buyoffer';

export const buyoffer = atom<BuyOfferType>({
  key: 'buyoffer',
  default: {
    image: null,
    price: null,
    purchaseOption: '',
    productCount: null,
    description: '',
    shippingOption: '',
  },
});
