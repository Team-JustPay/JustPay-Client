import React from 'react';

import type { Address } from 'react-daum-postcode';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useState } from 'react';

export default function AddressPopUp() {
  const open = useDaumPostcodePopup();

  const [address, setAddress] = useState({ zipcode: '', main: '', detail: '' });

  const onOpenAddress = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e && e.preventDefault();
    open({
      onComplete: onCompleteAddress,
      defaultQuery: address.main,
      top: window.screen.height / 2 - 250, // 창 뜨는 위치,
      left: window.screen.width / 2 - 250, // 창 뜨는 위치,
    });
  };

  const onCompleteAddress = (data: Address) => {
    const zipcode = data.zonecode;
    let mainAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      if (extraAddress) {
        mainAddress += ` (${extraAddress})`;
      }
    }

    setAddress({ ...address, zipcode, main: mainAddress });
  };
}
