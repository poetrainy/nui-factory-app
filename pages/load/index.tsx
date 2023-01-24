import { Box, Center, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import DummyButton from '../../src/components/DummyButton';
import Heading from '../../src/components/Heading';
import Navigation from '../../src/components/Navigation';
import NextLink from 'next/link';

const Load: NextPage = () => {
  type loadArrayType = {
    text: string;
    path: string;
  };

  const loadArray: loadArrayType[] = [
    { text: '下書きから選ぶ', path: 'draft' },
    { text: 'レシピを読み込む', path: 'read' },
  ];

  return (
    <>
      <Navigation />
      <Box as="section" textStyle="bodyWidth">
        <Heading data="既にあるデザインから作る" />
        <Flex justifyContent="space-between" w="100%">
          {loadArray.map((item: loadArrayType, i: number) => (
            <NextLink href={item.path} passHref key={i + item.path}>
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
      </Box>
    </>
  );
};

export default Load;
