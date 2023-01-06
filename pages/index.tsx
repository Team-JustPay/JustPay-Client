import Head from 'next/head';
import SuggestItem from 'components/matching/SuggestItem';

function Home() {
  return (
    <div>
      <Head>
        <title>JustPay-dev</title>
      </Head>
      <SuggestItem itemSize="small" description="매칭 대기중" />
      <div style={{ height: '50px' }}></div>
      <SuggestItem
        itemSize="big"
        description="마크 두개 일괄되나욥"
        purchaseOption="일괄 구매"
        productCount={2}
        price={80000}
      />
    </div>
  );
}

export default Home;
