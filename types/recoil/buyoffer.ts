export interface BuyOfferType {
  image: Blob | File;
  price: number | null;
  purchaseOption: string;
  productCount: number | null;
  description: string;
  shippingOption: string;
}
