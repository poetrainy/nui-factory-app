import { Box, Center, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import NextLink from 'next/link';
import Content from '../../src/components/Content';

const Load: NextPage = () => {
  type loadArrayType = {
    text: string;
    path: string;
  };
  const loadArray: loadArrayType[] = [
    { text: '下書きから選ぶ', path: 'draft' },
    { text: 'レシピを読み込む', path: 'read' },
  ];

  const Component = () => (
    <Flex justifyContent="space-between" w="100%">
      {loadArray.map((item: loadArrayType, i: number) => (
        <NextLink href={'load/' + item.path} passHref key={i + item.path}>
          <Center
            flexDirection="column"
            gap="8px"
            w="160px"
            p="32px 0"
            fontSize="1.6rem"
            fontWeight="bold"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
            borderRadius="24px"
          >
            <Box as="img" src={`./img/icon_load_${item.path}.svg`} />
            <Text>{item.text}</Text>
          </Center>
        </NextLink>
      ))}
    </Flex>
  );

  return <Content head="既にあるデザインから作る" component={<Component />} />;
};

export default Load;
