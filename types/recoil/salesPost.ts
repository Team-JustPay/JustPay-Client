export interface salesPostType {
  mainImage: any;
  productCount: null | number;
  salesOption: string;
  priceOption: string;
  price: null | number;
  certificationWord: string;
  description: string;
  shippingOptions: string[];
  certifications: (Blob | FormData | null)[];
}
