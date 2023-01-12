import React, { useRef, useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { salesPostState } from '../../recoil/salespost';

import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import BigButton from 'components/common/BigButton';
import layout from './layout';
import Header from 'components/common/Header';
import ImagePostButton from 'components/common/ImagePostButton';
import CancelButton from 'public/assets/icons/imageUploadCancel.svg';
import CertificationView from 'components/sell/qcImageUpload/CertificationWordView';

export default function qcImageUpload() {
  const [salesPost, setSalesPostState] = useRecoilState(salesPostState);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<string[]>([]);

  const handleCheckfileInput = () => {
    fileInputRef.current?.click();
  };

  const uploadProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    let imageUrlLists = [...imageFile];

    if (fileList === null) {
      return;
    }

    for (let i = 0; i < fileList.length; i++) {
      const currentImageUrl = URL.createObjectURL(fileList[i]);
      imageUrlLists.push(currentImageUrl);

      setSalesPostState((prev) => ({ ...prev, certifications: [...prev.certifications, fileList[i]] }));
    }

    if (imageUrlLists.length > 5) {
      imageUrlLists = imageUrlLists.slice(0, 5);
      setSalesPostState((prev) => ({ ...prev, certifications: [...prev.certifications.slice(0, 5)] }));
    }

    setImageFile(imageUrlLists);
  };

  console.log(salesPost.certifications);

  const handleDeleteImage = (id: number) => {
    if (imageFile !== null) {
      setImageFile(imageFile.filter((_, index) => index !== id));
      setSalesPostState((prev) => ({
        ...prev,
        certifications: [...prev.certifications.filter((_, index) => index !== id)],
      }));
    }
  };

  const handleClickNextButton = () => {
    // putCertifiactionWord((prev) => ({ ...prev, certificationWord: data?.data.data.certificationWord }));
    Router.push('/sell/selectPrice');
  };

  return (
    <>
      <Header title="판매글 작성하기" isHavingBackButton={true} rightButtonText="취소" />
      <StyledCertigfyInfoConatiner>
        <MainText text="인증 전용 사진을 추가로 등록해주세요" />
        <SubText
          text="포스트잇에 계정 아이디와 인증단어를 적어주세요
  사진은 5장까지 등록할 수 있어요"
          isMainColor={false}
        />
      </StyledCertigfyInfoConatiner>
      <CertificationView />
      <StyledUploadImageConatiner>
        {imageFile.length < 5 && (
          <>
            <ImagePostButton buttonSize="small" htmlFor="file" onChange={handleCheckfileInput} />
            <ImageUploadInput
              style={{ display: 'none' }}
              type="file"
              id="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={uploadProfile}
              multiple
            />
          </>
        )}
        {imageFile.map((image, id) => (
          <ImageWrapper>
            <ShowFileImage src={image} alt="인증" key={id} />
            <StyledImageDeleteButton onClick={() => handleDeleteImage(id)}>
              <CancelButton />
            </StyledImageDeleteButton>
          </ImageWrapper>
        ))}
      </StyledUploadImageConatiner>
      <BigButton text="다음" isDisabled={false} onClick={handleClickNextButton} />
    </>
  );
}

qcImageUpload.Layout = layout;

const StyledCertigfyInfoConatiner = styled.section`
  margin-top: 2rem;
  & :first-child {
    margin-bottom: 0.8rem;
  }

  & :last-child {
    width: 27.5rem;
    margin-bottom: 1.6rem;
  }
`;

const StyledUploadImageConatiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ShowFileImage = styled.img`
  position: relative;

  width: 11rem;
  height: 11rem;
  border-radius: 0.8rem;
  object-fit: fill;
`;

const StyledImageDeleteButton = styled.button`
  position: absolute;
  top: 0rem;
  right: 0.8rem;

  width: 4.2rem;
  height: 4.2rem;
`;

const ImageUploadInput = styled.input``;

const ImageWrapper = styled.div`
  position: relative;
`;
