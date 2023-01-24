import { Box, Center } from '@chakra-ui/react';
import type { NextPage } from 'next';
import DummyButton from '../../src/components/DummyButton';
import Heading from '../../src/components/Heading';
import Navigation from '../../src/components/Navigation';

const Draft: NextPage = () => {
  return (
    <>
      <Navigation />
      <Box as="section" textStyle="bodyWidth">
        <Heading data="下書きから選ぶ" back="既にあるデザインから作る" />
        <Center flexDirection="column" gap="40px" mt="160px">
          下書きはまだありません
          <DummyButton data="新しく作る！" inline />
        </Center>
      </Box>
    </>
  );
};

export default Draft;
