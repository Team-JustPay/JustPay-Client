import Head from 'next/head';
import BigButton from '../components/common/BigButton';
import SmallButton from '../components/common/SmallButton';
import UserInput from '../components/common/UserInput';

function Home() {
  return (
    <div>
      <Head>
        <title>JustPay-dev</title>
      </Head>
      <BigButton text="다음" disabled={false} onClick={() => console.log('hi')} />
      <SmallButton text="버튼" disabled={true} />
      <SmallButton text="버튼" disabled={false} />
      <UserInput placeholder="정확한 상품 개수를 입력해주세요" inputTextGuide="개" />
    </div>
  );
}

export default Home;
