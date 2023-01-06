import { atom } from 'recoil';
import { salesPostType } from 'types/recoil/salesPost';

export const salesPostState = atom<salesPostType>({
  key: 'salesPost',
  default: {
    mainImage: '',
    productCount: 500,
    salesOption: '',
    priceOption: '',
    price: null,
    certificationWord: '',
    description: '',
    status: null,
    shippingOptions: [],
    certifications: [],
  },
});
