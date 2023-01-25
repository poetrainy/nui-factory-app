import { Box, Center, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Content from '../src/components/Content';
import OriginalSpacer from '../src/components/OriginalSpacer';

const Read: NextPage = () => {
  type readArrayType = {
    text: string;
    icon: string;
  };
  const readArray: readArrayType[] = [
    {
      text: 'カメラを開く',
      icon: 'camera',
    },
    {
      text: 'アルバムから選択',
      icon: 'album',
    },
  ];

  const Component = () => (
    <Box w="fit-content" m="auto" pt="96px">
      <Flex as="ul" flexDirection="column" gap="16px" w="fit-content">
        {readArray.map((item: readArrayType, i: number) => (
          <Flex alignItems="center" gap="16px" key={item.icon + i}>
            <Center
              w="64px"
              h="64px"
              bg="primary500"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
              borderRadius="9999px"
            >
              <Box as="img" src={'../img/icon_read_' + item.icon + '.svg'} />
            </Center>
            <Text>{item.text}</Text>
          </Flex>
        ))}
      </Flex>
      <OriginalSpacer size="56px" />
      <Box>
        <Text w="fit-content">または、レシピコードを入力</Text>
        <OriginalSpacer size="16px" />
        <Box
          as="input"
          type="text"
          placeholder="7桁の半角英数字"
          w="256px"
          h="56px"
          bg="black100"
          p="0 24px"
          borderRadius="9999px"
        />
      </Box>
    </Box>
  );

  return <Content head="レシピを読み込む" component={<Component />} />;
};

export default Read;
