import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Heading from '../../src/components/Heading';
import Textarea from '../../src/components/Textarea';
import Button from '../../src/components/Button';
import Navigation from '../../src/components/Navigation';
import OriginalSpacer from '../../src/components/OriginalSpacer';

const Favorite: NextPage = () => {
  return (
    <>
      <Navigation />
      <Box as="section" textStyle="bodyWidth">
        <Heading data="ログイン" />
        <OriginalSpacer size="10vh" />
        <Box as="form">
          <Textarea title="SMS認証" example="携帯電話番号を入力してください" />
          <Button data="認証コードを送信" textIndex={[2, 0]} path="/column" />
        </Box>
      </Box>
    </>
  );
};

export default Favorite;
