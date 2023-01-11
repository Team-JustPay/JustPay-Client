export interface BuyOfferType {
  image: null | Blob | File;
  price: number | null;
  purchaseOption: string;
  productCount: number | null;
  description: string;
  shippingOption: string;
}
