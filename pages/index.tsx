import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Content from '../src/components/Content';

const Home: NextPage = () => {
  const Component = () => (
    <>
      <Box>ぬいぐるみを作る</Box>
      <Box>下書きから選ぶ</Box>
      <Box>レシピを読み込む</Box>
      <Box>ぬいふぁくってなに？</Box>
    </>
  );

  return <Content component={<Component />} isFoot />;
};

export default Home;
