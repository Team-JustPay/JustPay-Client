export interface salesPostType {
  mainImage: File | null | Blob;
  productCount: null | number;
  salesOption: string;
  priceOption: string;
  price: null | number;
  certificationWord: string;
  description: string;
  status: null | number;
  shippingOptions: string[];
  certifications: string[];
}
