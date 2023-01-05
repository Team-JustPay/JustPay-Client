export interface BuyOfferType {
  id: number | null;
  imageUrl: string | null;
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
