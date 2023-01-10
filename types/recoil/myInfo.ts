export interface MyInfoType {
  email: string;
  nickName: string;
  profileImageUrl: string;
  socialId: string;
  phoneNumber: string;
  accountNumber: string;
  dealCount: number;
  saleCount: number;
  saleMoney: number;
  purchaseCount: number;
  purchaseMoney: number;
  openChatUrl: string;
  bankName: string;
  depositorName: string;
  twitterMessageUrl: string;
  shippingInfo: {
    receiverName: string;
    zipCode: string;
    address: string;
    detailAddress: string;
    cuStoreName: string;
    gsStoreName: string;
  };
}
