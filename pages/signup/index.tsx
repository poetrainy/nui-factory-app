import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Heading from '../../src/components/Heading';
import Textarea from '../../src/components/Textarea';
import Button from '../../src/components/Button';
import Navigation from '../../src/components/Navigation';
import OriginalSpacer from '../../src/components/OriginalSpacer';

const Signup: NextPage = () => {
  return (
    <>
      <Navigation />
      <Box as="section" textStyle="bodyWidth">
        <Heading data="新規会員登録" />
        <OriginalSpacer size="10vh" />
        <Box as="form">
          <Textarea title="SMS認証" example="携帯電話番号を入力してください" />
          <Button
            data="認証コードを送信"
            textIndex={[1, 0]}
            path="/signup/sms"
          />
        </Box>
      </Box>
    </>
  );
};

export default Signup;
