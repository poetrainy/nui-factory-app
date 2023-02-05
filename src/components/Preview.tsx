import { FC, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import OriginalSpacer from 'src/components/OriginalSpacer';
// import DummyButton from 'src/components/DummyButton';
import { partsType } from 'src/types/apiType';
import { partsApi } from 'src/libs/api';

const test = [1, 2, 3];

const Preview: FC = () => {
  const [data, setData] = useState<partsType[]>();

  const getApi = async () => {
    const response = await fetch(`${partsApi}`);
    const otetsudaiApiData = await response.json();
    setData(otetsudaiApiData);
  };

  return (
    <>
      {/* {data && (
        <Box
          w={'280px'}
          h={'280px'}
          pos={'relative'}
          overflow={'hidden'}
          sx={{
            '.parts_hair-option_side': {
              width: '40px',
              height: '100px',
              inset: '96px 0 auto 44px',
              position: 'absolute',
            },
            '.parts_hair-option_mesh': {
              // width: '40px',
              // height: '100px',
              // inset: '96px 0 auto 44px',
              position: 'absolute',
            },
            '.parts_hair-option_stupid-top': {
              width: '28px',
              height: '100px',
              inset: '-60px 0 auto 106px',
              position: 'absolute',
            },
            '.parts_hair-option_stupid-bottom': {
              width: '31px',
              height: '100px',
              inset: '-1px 0 auto 108px',
              position: 'absolute',
            },
            '.parts_accessory_mole-leftEye': {
              width: '3px',
              height: '3px',
              inset: '160px 0 auto 163px',
              position: 'absolute',
            },
            '.parts_accessory_mole-rightEye': {
              width: '3px',
              height: '3px',
              inset: '160px 0 auto 55px',
              position: 'absolute',
            },
            '.parts_accessory_mole-free': {
              width: '3px',
              height: '3px',
              inset: '166px 0 auto 136px',
              position: 'absolute',
            },
            '.parts_accessory_freckles': {
              width: '30px',
              inset: '43px 0 auto 0',
              margin: 'auto',
              position: 'absolute',
              path: {
                fill: '#d39667',
              },
            },
            '.parts_accessory_pierce-01': {
              width: '20px',
              position: 'absolute',
              inset: '32px 0 auto 200px',
            },
            '.parts_accessory_pierce-02': {
              display: 'flex',
              justifyContent: 'space-between',
              width: '194px',
              height: '10px',
              position: 'absolute',
              inset: '147px auto auto auto',
              svg: {
                width: '10px',
              },
            },
            '.parts_accessory_eyelashes': {
              display: 'flex',
              justifyContent: 'space-between',
              width: '112px',
              height: '7px',
              position: 'absolute',
              inset: '154px auto auto auto',
              svg: {
                width: '8.5px',
              },
            },
          }}
        >
          {data.map((item: partsType, i) => (
            <Box
              key={item.titleEn + i}
              w={'280px'}
              h={'280px'}
              pos={'absolute'}
              sx={{
                '>div': {
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
                    width: '215px',
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
                  ...(i === 9 && {
                    width: '100%',
                    height: '100%',
                    inset: '4px 0 auto 0',
                    zIndex: 5,
                    div: {
                      width: '100%',
                      height: '100%',
                    },
                  }),
                  // アクセサリー
                  ...(i === 10 && {
                    display: 'flex',
                    justifyContent: 'center',
                    width: '220px',
                    height: '220px',
                    inset: '4px 0 auto 0',
                    zIndex: 3,
                    div: {
                      width: '100%',
                      height: '100%',
                      svg: {
                        '&:nth-of-type(2)': {
                          transform: 'scale(-1, 1)',
                        },
                      },
                    },
                  }),
                  // 服
                  ...(i === 11 && {
                    width: '220px',
                    height: '220px',
                    inset: '160px 0 auto 0',
                    zIndex: 2,
                  }),
                  // からだ
                  ...(i === 12 && {
                    width: '258px',
                    height: '213px',
                    inset: '198px 0 auto 0',
                    zIndex: 1,
                  }),
                },
              }}
            >
              {selectParts[i].map((svgIndex: number, i2) => (
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  margin={'auto'}
                  position={'absolute'}
                  key={i2 + 'preview'}
                >
                  <Box
                    as={partsSvgArray[i][svgIndex]}
                    w={'100%'}
                    h={'100%'}
                    objectFit={'contain'}
                    sx={{
                      '.colorChange': {
                        transition: 'fill 0.2s',
                      },
                      ...(item.color !== undefined && {
                        '.colorChange': {
                          fill: item.color[selectColor[i]],
                        },
                      }),
                    }}
                  />
                  {item.symmetry && (
                    <Box
                      as={partsSvgArray[i][svgIndex]}
                      w={'100%'}
                      h={'100%'}
                      objectFit={'contain'}
                      inset={'0 0 auto auto'}
                      sx={{
                        ...(item.reversal && {
                          transform: 'scale(-1, 1)',
                        }),
                        ...(item.color !== undefined && {
                          '.colorChange': {
                            // @ts-ignore
                            fill: item.color[selectColor[i]],
                          },
                        }),
                      }}
                    />
                  )}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      )} */}
    </>
  );
};

export default Preview;
