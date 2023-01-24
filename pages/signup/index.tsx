import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Textarea from '../../src/components/Textarea';
import Button from '../../src/components/Button';
import OriginalSpacer from '../../src/components/OriginalSpacer';
import Content from '../../src/components/Content';

const Signup: NextPage = () => {
  const Component = () => (
    <>
      <OriginalSpacer size="10vh" />
      <Box as="form">
        <Textarea title="SMS認証" example="携帯電話番号を入力してください" />
        <Button data="認証コードを送信" textIndex={[1, 0]} path="/signup/sms" />
      </Box>
    </>
  );

  return <Content head="新規会員登録" component={<Component />} />;
};

export default Signup;
