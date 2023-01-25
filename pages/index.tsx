import { Box, Center, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Content from '../src/components/Content';
import { category } from '../src/libs/category';
import NextLink from 'next/link';
import OriginalSpacer from '../src/components/OriginalSpacer';

const Home: NextPage = () => {
  const Component = () => (
    <>
      <Box>ぬいぐるみを作る</Box>
      <Box>下書きから選ぶ</Box>
      <Box>レシピを読み込む</Box>
      <Box>ぬいふぁくってなに？</Box>
      <Box w="85%" m="auto">
        <Text as="h2" fontSize="2rem" fontWeight="bold">
          服を買う
        </Text>
        <OriginalSpacer size="16px" />
        <Flex
          as="ul"
          justifyContent="space-between"
          flexWrap="wrap"
          gap="16px 0"
        >
          {category.map((item, i) => (
            <Box
              as="li"
              w="48%"
              key={item.path + i}
              sx={{
                '>a': {
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '8px',
                  width: '100%',
                },
              }}
            >
              <NextLink href={'/goods/' + item.path} passHref>
                <Center
                  w="48px"
                  h="48px"
                  bg="secondary500"
                  borderRadius="9999px"
                >
                  <Box
                    as="img"
                    src={'./img/icon_category_' + item.path + '.svg'}
                    w="28px"
                    h="28px"
                    objectFit="contain"
                  />
                </Center>
                <Text as="span" fontWeight="bold">
                  {item.heading}
                </Text>
              </NextLink>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );

  return <Content component={<Component />} index isFoot />;
};

export default Home;
