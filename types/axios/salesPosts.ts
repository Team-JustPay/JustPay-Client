export interface salesPostResponseType {
  id: number;
  imageUrl: string;
  productCount: number;
  purchaseOption: string;
  price: number;
  description: string;
  status: number;
  isMine: boolean;
  suggester: {
    id: string;
    profileImageUrl: string;
  };
}
