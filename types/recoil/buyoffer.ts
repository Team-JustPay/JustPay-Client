export interface BuyOfferType {
  image: Blob | null | string;
  price: number | null;
  purchaseOption: string;
  productCount: number | null;
  description: string;
  shippingOption: string;
}
