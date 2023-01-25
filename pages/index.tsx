import { Box, Center, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Content from '../src/components/Content';
import { category } from '../src/libs/category';
import NextLink from 'next/link';
import OriginalSpacer from '../src/components/OriginalSpacer';
import { nuiMakeArray } from '../src/libs/nuiMakeArray';
import { nuiMakeArrayType } from '../src/types/nuiMake';

const Home: NextPage = () => {
  const Component = () => {
    return (
      <>
        <Flex
          flexDirection="column"
          w="90vw"
          gap="8px"
          m="auto"
          sx={{
            '>div': {
              gap: '16px',
              width: '100%',
              borderRadius: '36px',
            },
          }}
        >
          <Flex w="100%" h="200px" bg="yellow300">
            <Box as="img" src={''} w="48px" h="48px" />
            <Text w="fit-content" fontWeight="bold">
              ぬいぐるみを作る！
            </Text>
          </Flex>
          {nuiMakeArray.map((item: nuiMakeArrayType, i: number) => (
            <Flex
              key={item.path + i}
              alignItems="center"
              h="72px"
              bg="#dd705e1a"
              p="0 32px"
            >
              <Box
                as="img"
                src={'./img/icon_make_' + item.path + '.svg'}
                w="48px"
                h="48px"
              />
              <Text w="fit-content" fontWeight="bold">
                {item.text}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Box>ぬいふぁくってなに？</Box>
        <Box w="85vw" m="auto">
          <Text as="h2" fontSize="2rem" fontWeight="bold">
            ぬい服を着せよう！
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
  };

  return <Content component={<Component />} index isFoot />;
};

export default Home;
