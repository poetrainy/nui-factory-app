import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Button from 'src/components/Button';
import Content from 'src/components/Content';
import OriginalSpacer from 'src/components/OriginalSpacer';
import Sms from 'src/components/Sms';

const SigninSms: NextPage = () => {
  const Component = () => (
    <>
      <OriginalSpacer size={'10vh'} />
      <Box as={'form'}>
        <Sms />
        <Button data={'認証する'} textIndex={[1, 0]} path={'/'} />
      </Box>
    </>
  );

  return (
    <Content head={'SMS認証'} back={'ログイン'} component={<Component />} />
  );
};

export default SigninSms;
