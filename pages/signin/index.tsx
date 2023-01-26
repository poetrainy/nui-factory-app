import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Textarea from 'src/components/Textarea';
import Button from 'src/components/Button';
import OriginalSpacer from 'src/components/OriginalSpacer';
import Content from 'src/components/Content';

const Signin: NextPage = () => {
  const Component = () => (
    <>
      <OriginalSpacer size={'10vh'} />
      <Box as={'form'}>
        <Textarea
          title={'SMS認証'}
          example={'携帯電話番号を入力してください'}
        />
        <Button
          data={'認証コードを送信'}
          textIndex={[2, 0]}
          path={'/signin/sms'}
        />
      </Box>
    </>
  );

  return <Content head={'ログイン'} component={<Component />} />;
};

export default Signin;
