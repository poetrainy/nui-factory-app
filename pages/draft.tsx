import { Center } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Content from 'src/components/Content';
import DummyButton from 'src/components/DummyButton';
import { nuiMakeArray } from 'src/libs/nuiMakeArray';

const Draft: NextPage = () => {
  const Component = () => (
    <Center flexDirection={'column'} gap={'40px'} mt={'160px'}>
      下書きはまだありません
      <DummyButton data={'新しく作る！'} inline />
    </Center>
  );

  return <Content head={nuiMakeArray[0].text} component={<Component />} />;
};

export default Draft;