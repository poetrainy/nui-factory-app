import type { NextPage } from 'next';
import { Center } from '@chakra-ui/react';
import Content from 'src/components/Content';
import Button from 'src/components/Button';
import { nuiMakeArray } from 'src/libs/nuiMakeArray';

const Draft: NextPage = () => {
  const Component = () => (
    <Center flexDirection={'column'} gap={'40px'} mt={'160px'}>
      下書きはまだありません
      <Button data={'新しく作る！'} path={'/customize'} inline />
    </Center>
  );

  return <Content head={nuiMakeArray[0].text} component={<Component />} />;
};

export default Draft;
