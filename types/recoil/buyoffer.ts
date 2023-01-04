export interface BuyOfferType {
  id: number;
  imageUrl: string;
  price: number | null;
  salesOption: number | null;
  productCount: string;
  description: string;
  status: number | null;
  shippingOption: {
    name: string;
    price: number | null;
  };
}
