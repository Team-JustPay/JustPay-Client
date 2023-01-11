import React, { useRef, useMemo, useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { salesPostState } from '../../recoil/salespost';
import { useGetCertificationWord } from 'apiHooks/salesPost';

import MainText from 'components/common/MainText';
import SubText from 'components/common/SubText';
import BigButton from 'components/common/BigButton';
import layout from './layout';
import Header from 'components/common/Header';
import ImagePostButton from 'components/common/ImagePostButton';
import CancelButton from 'public/assets/icons/imageUploadCancel.svg';
import CertificationView from 'components/sell/qcImageUpload/CertificationWordView';

type UploadImage = {
  file: File | null;
  thumbnail: string;
  type: string;
};
export default function qcImageUpload() {
  const setSalesPostState = useSetRecoilState(salesPostState);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<UploadImage | null>(null);

  const formData = new FormData();

  const { data } = useGetCertificationWord();
  const putCertifiactionWord = useSetRecoilState(salesPostState);

  const handleCheckfileInput = () => {
    fileInputRef.current?.click();
  };

  const uploadProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    const length = fileList?.length;
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);
      fileList && formData.append('image', fileList[0]);

      setImageFile({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });

      setSalesPostState((prev) => ({ ...prev, image: fileList[0] }));
    }
  };

  const handleDeleteImage = () => {
    if (imageFile !== null) {
      setImageFile(null);
      setSalesPostState((prev) => ({ ...prev, image: null }));
    }
  };

  const showImage = useMemo(() => {
    if (!imageFile && imageFile == null) {
      return <img src="hi" alt="blankImage" />;
    }
    return (
      <ImageWrapper>
        <ShowFileImage src={imageFile.thumbnail} />
        <StyledImageDeleteButton onClick={handleDeleteImage}>
          <CancelButton />
        </StyledImageDeleteButton>
      </ImageWrapper>
    );
  }, [imageFile]);

  const handleClickNextButton = () => {
    putCertifiactionWord((prev) => ({ ...prev, certificationWord: data?.data.data.certificationWord }));
    Router.push('/sell/selectPrice');
  };

  return (
    <>
      <div>
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
          <StyledImagePostWrapper>
            <ImagePostButton buttonSize="small" htmlFor="file" onChange={handleCheckfileInput} />
            <ImageUploadInput
              style={{ display: 'none' }}
              type="file"
              id="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={uploadProfile}
            />
          </StyledImagePostWrapper>
          {imageFile && showImage}
          {imageFile && showImage}
          {imageFile && showImage}
          {imageFile && showImage}
          {imageFile && showImage}
        </StyledUploadImageConatiner>
      </div>
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
const StyledCertigfyWordConatiner = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 2.4rem;

  color: ${({ theme }) => theme.colors.gray4};
  ${({ theme }) => theme.fonts.medium14pt};
  h1 {
    margin-right: 0.8rem;
  }
  p {
    margin-right: 0.8rem;
  }
  strong {
    color: ${({ theme }) => theme.colors.sub1};
    ${({ theme }) => theme.fonts.title16pt};
  }
`;

const StyledUploadImageConatiner = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
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

const StyledImagePostWrapper = styled.div`
  margin-bottom: 2rem;
  width: 11rem;
  height: 11rem;

  background-color: ${({ theme }) => theme.colors.grey_popup};
  border-radius: 0.8rem;
`;

const ImageWrapper = styled.div`
  position: relative;
`;
