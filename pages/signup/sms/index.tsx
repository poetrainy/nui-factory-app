import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Button from '../../../src/components/Button';
import Heading from '../../../src/components/Heading';
import Navigation from '../../../src/components/Navigation';
import OriginalSpacer from '../../../src/components/OriginalSpacer';
import Sms from '../../../src/components/Sms';

const Favorite: NextPage = () => {
  return (
    <>
      <Navigation />
      <Box as="section" textStyle="bodyWidth">
        <Heading data="SMS認証" back="新規会員登録" />
        <OriginalSpacer size="10vh" />
        <Box as="form">
          <Sms />
          <Button data="認証する" textIndex={[1, 0]} path="/form" />
        </Box>
      </Box>
    </>
  );
};

export default Favorite;
