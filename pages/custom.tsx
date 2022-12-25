import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useState } from 'react';
import Navigation from '../src/components/Navigation';
import { partsApi } from '../src/libs/api';
import { partsSvgArray } from '../src/libs/partsArray';
import { nuiPartsType } from '../src/types/apiType';
import { partsType } from '../src/types/parts';

type Props = {
  data: partsType[];
};

const Custom: NextPage<Props> = ({ data }) => {
  const [parts, setParts] = useState<nuiPartsType[]>([
    {
      svg: [0],
      color: 0,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      svg: [0],
      color: 0,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      svg: [0],
      color: 0,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      svg: [0],
      color: 0,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      svg: [0],
      color: 0,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      svg: [0],
      color: 0,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      svg: [0],
      color: 0,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      svg: [0],
      color: 0,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      svg: [0],
      color: 0,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      svg: [0],
      color: 0,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      svg: [0],
      color: 0,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      svg: [0],
      color: 0,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      svg: [0],
      color: 0,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      svg: [0],
      color: 0,
      position: {
        x: 0,
        y: 0,
      },
    },
  ]);

  console.log(data);

  return (
    <Flex flexDirection="column" justifyContent="space-between" h="100vh">
      <Navigation />
      <Box as="section">
        <Box
          w="280px"
          h="280px"
          pos="relative"
          sx={{
            '.parts_accessory-01_mole-leftEye': {
              width: '3px',
              height: '3px',
              inset: '160px 0 auto 163px',
            },
            '.parts_accessory-01_mole-rightEye': {
              width: '3px',
              height: '3px',
              inset: '160px 0 auto 55px',
            },
            '.parts_accessory-01_mole-free': {
              width: '3px',
              height: '3px',
              inset: '10px 0 auto 163px',
            },
            '.parts_accessory-01_freckles': {
              width: '30px',
              inset: '150px 0 auto 0',
              margin: 'auto',
              path: {
                fill: '#d39667',
              },
            },
            '.parts_accessory-01_pierce-01': {
              width: '20px',
              inset: '124px 0 auto 200px',
            },
            '.parts_accessory-02_pierce-02': {
              width: '10px',
              inset: '147px 0 auto 198px',
            },
            '.parts_accessory-02_eyelashes': {
              width: '8px',
              inset: '155px 0 auto 54px',
            },
          }}
        >
          {data.map((item: partsType, i) => (
            <Box
              key={item.titleEn + i}
              display="flex"
              justifyContent="space-between"
              margin="auto"
              position="absolute"
              sx={{
                // 1. 後ろ髪, 服
                // 2. 耳
                // 3. 輪郭, アクセサリー1, アクセサリー2
                // 4. 頬, 前髪
                // 5. 目, 眉, 鼻, 口
                // 輪郭
                ...(i === 0 && {
                  width: '180px',
                  height: '180px',
                  inset: '30px 0 auto 0',
                  zIndex: 3,
                }),
                // 目
                ...(i === 1 && {
                  width: '128px',
                  height: '33px',
                  inset: '130px 0 auto 0',
                  zIndex: 5,
                  svg: {
                    width: '51px',
                  },
                }),
                // 眉
                ...(i === 2 && {
                  width: '100px',
                  inset: '115px 0 auto 0',
                  zIndex: 5,
                  svg: {
                    width: '27px',
                  },
                }),
                // 耳
                ...(i === 3 && {
                  width: '212px',
                  height: '48px',
                  inset: '120px 0 auto 0',
                  zIndex: 2,
                  svg: {
                    width: '34px',
                  },
                }),
                // 鼻
                ...(i === 4 && {
                  width: '1px',
                  height: '5px',
                  inset: '163px 0 auto 0',
                  zIndex: 5,
                  svg: {
                    width: '1px',
                  },
                }),
                // 頬
                ...(i === 5 && {
                  width: '164px',
                  height: '40px',
                  inset: '145px 0 auto 0',
                  zIndex: 3,
                  opacity: 0.8,
                  svg: {
                    width: '40px',
                  },
                }),
                // 口
                ...(i === 6 && {
                  width: '32px',
                  inset: '175px 0 auto 0',
                  zIndex: 5,
                  svg: {
                    width: '32px',
                  },
                }),
                // 前髪
                ...(i === 7 && {
                  width: '194px',
                  inset: '15px 0 auto 0',
                  zIndex: 4,
                  svg: {
                    width: '194px',
                  },
                }),
                // 後ろ髪
                ...(i === 8 && {
                  width: '215px',
                  inset: '4px 0 auto 0',
                  zIndex: 1,
                  svg: {
                    width: '215px',
                  },
                }),
                // 髪オプション
                ...(i === 9 && {}),
                // アクセサリー1
                ...(i === 10 && {
                  width: '220px',
                  height: '220px',
                  inset: '4px 0 auto 0',
                  zIndex: 3,
                  svg: {
                    position: 'absolute',
                  },
                }),
                // アクセサリー2
                ...(i === 11 && {
                  width: '220px',
                  height: '220px',
                  inset: '4px 0 auto 0',
                  zIndex: 3,
                  svg: {
                    position: 'absolute',
                  },
                }),
                // 服
                ...(i === 12 && {
                  width: '220px',
                  height: '220px',
                  inset: '160px 0 auto 0',
                  zIndex: 2,
                }),
                // からだ
                ...(i === 13 && {
                  width: '258px',
                  height: '213px',
                  inset: '198px 0 auto 0',
                  zIndex: 1,
                }),
              }}
            >
              {parts[i].svg.map((svg: number, i2) => (
                <>
                  <Box
                    as={partsSvgArray[i][svg]}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    sx={{
                      ...(item.color !== undefined && {
                        '.colorChange': {
                          fill: item.color[parts[i].color],
                        },
                      }),
                    }}
                  />
                  {item.symmetry && (
                    <Box
                      as={partsSvgArray[i][svg]}
                      w="100%"
                      h="100%"
                      objectFit="contain"
                      inset="0 0 auto auto"
                      transform="scale(-1, 1)"
                      sx={{
                        ...(item.color !== undefined && {
                          '.colorChange': {
                            // @ts-ignore
                            fill: item.color[parts[i].color],
                          },
                        }),
                      }}
                    />
                  )}
                </>
              ))}
            </Box>
          ))}
        </Box>
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
                {partsSvgArray[i1].map((svg: any, i2: number) => (
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
