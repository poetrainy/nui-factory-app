import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useState } from 'react';
import Navigation from '../src/components/Navigation';
import { partsApi } from '../src/libs/api';
import { partsType } from '../src/types/parts';

type Props = {
  data: partsType[];
};

const Custom: NextPage<Props> = ({ data }) => {
  const [parts, setParts] = useState<number[]>([
    0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  // const [parts, setParts] = useState<{ content: number; index: number }[]>([
  //   { content: 0, index: 0 },
  //   { content: 1, index: 0 },
  //   { content: 2, index: 0 },
  //   { content: 3, index: 0 },
  //   { content: 4, index: 0 },
  //   { content: 5, index: 0 },
  //   { content: 6, index: 0 },
  //   { content: 7, index: 0 },
  //   { content: 8, index: 0 },
  //   { content: 9, index: 0 },
  //   { content: 10, index: 0 },
  //   { content: 11, index: 0 },
  //   { content: 12, index: 0 },
  // ]);

  return (
    <Flex flexDirection="column" justifyContent="space-between" h="100vh">
      <Navigation />
      <Box as="section">
        <Box w="100vw" overflow="scroll">
          <Flex flexWrap="wrap" w={`calc(3 * 100vw)`}>
            {data.map((item: partsType, i: number) => (
              <Text
                w="21vw"
                h="56px"
                key={item.titleEn + i}
                bg="white"
                borderLeftWidth="5px"
                borderLeftStyle="solid"
                borderLeftColor="black200"
                borderTopWidth="5px"
                borderTopStyle="solid"
                borderTopColor="black200"
                borderRightWidth="5px"
                borderRightStyle="solid"
                borderRightColor="black200"
                borderRadius="16px 16px 0 0"
                transform={`translateX(-${8 * i}px)`}
              >
                {item.titleJa}
              </Text>
            ))}
          </Flex>
        </Box>
        <Box w="100vw" h="55vh" bg="black100" overflow="scroll">
          <Flex
            as="ul"
            w={`calc(${data.length} * 100vw)`}
            h="fit-content"
            p="40px 0"
          >
            {data.map((item: partsType, i1: number) => (
              <Flex
                as="li"
                key={item.titleEn + i1}
                flexWrap="wrap"
                gap="8px"
                w="100vw"
                h="fit-content"
                p="0 calc((100vw - (20vw * 4 + 8px * 3))/2)"
              >
                {item.svg.map((svg: any, i2: number) => (
                  <Flex
                    key={i2}
                    w="20vw"
                    h="20vw"
                    bg="white"
                    pos="relative"
                    borderRadius="16px"
                    overflow="hidden"
                    sx={{
                      ...(parts[i1] === i2 && {
                        borderWidth: '5px',
                        borderStyle: 'solid',
                        borderColor: 'primary500',
                      }),
                    }}
                  >
                    <Box
                      as={svg}
                      w="100%"
                      h="100%"
                      pos="absolute"
                      inset="0 0 auto auto"
                    />
                  </Flex>
                ))}
              </Flex>
            ))}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Custom;

export const getStaticProps = async () => {
  const response = await fetch(`${partsApi}`);
  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
};
