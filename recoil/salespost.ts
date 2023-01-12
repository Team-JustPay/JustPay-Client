import { atom } from 'recoil';
import { salesPostType } from 'types/recoil/salesPost';

export const salesPostState = atom<salesPostType>({
  key: 'salesPost',
  default: {
    mainImage: null,
    productCount: null,
    salesOption: '',
    priceOption: '',
    price: null,
    certificationWord: '',
    description: '',
    shippingOptions: [],
    certifications: [],
  },
});
