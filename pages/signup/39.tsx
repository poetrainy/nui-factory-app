import { Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Button from 'src/components/Button';
import Content from 'src/components/Content';

const Signup39: NextPage = () => {
  const Component = () => (
    <>
      <Text>
        ご登録ありがとうございます。
        <br />
        引き続きぬいふぁく！でお買い物を楽しみましょう！
      </Text>
      <Button data="トップに戻る" textIndex={[]} path="/" />
    </>
  );

  return <Content head="新規会員登録完了" component={<Component />} />;
};

export default Signup39;
