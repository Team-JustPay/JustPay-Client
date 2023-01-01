import Head from 'next/head';
import ImagePostButton from 'components/common/ImagePostButton';

function Home() {
  return (
    <div>
      <Head>
        <title>JustPay-dev</title>
      </Head>
      <ImagePostButton buttonSize="big" />
      <ImagePostButton buttonSize="small" />
    </div>
  );
}

export default Home;
