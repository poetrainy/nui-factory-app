import { Box, Center, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Navigation from 'src/components/Navigation';
import { partsApi } from 'src/libs/api';
import { partsSvgArray } from 'src/libs/partsArray';
import { partsType } from 'src/types/apiType';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { firebaseApp } from 'src/libs/firebase';
import NextLink from 'next/link';
import Heading from 'src/components/Heading';
import OriginalSpacer from 'src/components/OriginalSpacer';
import { nuiMakeArray } from 'src/libs/nuiMakeArray';
import { nuiMakeArrayType } from 'src/types/nuiMake';

// type Props = {
//   data: partsType[];
// };

const partsTitle = [
  'outline',
  'eyes',
  'eyebrows',
  'ears',
  'nose',
  'cheeks',
  'mouth',
  'bang',
  'backHair',
  'hairOption',
  'accessory',
  'clothes',
  'body',
];

const Custom: NextPage = () => {
  const [parts, setParts] = useState<any>();
  // 色を編集する可能性のあるパーツの配列
  // const [colorPickerParts, setColorPickerParts] = useState<any>();
  // const colorPickerParts = data.filter((item) => item.colorPicker);
  const [tab, setTab] = useState<number>(0);
  const [selectColor, setSelectColor] = useState<number[]>([
    0, 7, 0, 0, 0, 0, 0, 14, 14, 14, 0, 0, 0,
  ]);

  const [selectPickUpColor, setSelectPickUpColor] = useState<string[][]>([
    ['#000000'],
    ['#000000'],
    ['#000000'],
    ['#000000', '#000000', '#000000', '#000000'],
  ]);
  const [selectParts, setSelectParts] = useState<number[][]>([
    [0],
    [0],
    [0],
    [0],
    [0],
    [1],
    [0],
    [0],
    [0],
    [0],
    [4],
    [0],
    [0],
  ]);
  const [isColorModal, setIsColorModal] = useState<boolean>(false);
  const [colorPicker, setColorPicker] = useState<string>('');
  const [isLoadModal, setIsLoadModal] = useState<boolean>(false);
  const [data, setData] = useState<partsType[]>();

  let updateParts: any = [];
  let updateSelectColor: any = [];
  let updateSelectParts: any = [];
  let skinColor: number = 0;

  const getApi = async () => {
    const response = await fetch(`${partsApi}`);
    const otetsudaiApiData = await response.json();
    setData(otetsudaiApiData);
    // const [colorPickerParts, setColorPickerParts] = useState<any>();
    // if (data) {
    //   setColorPickerParts[data.filter((item) => item.colorPicker)];
    // }
  };

  useEffect(() => {
    getApi();
  }, []);

  // 色選択モードに変更する
  const colorChange = () => {
    setIsColorModal(!isColorModal);
  };
  // 下書きを読み込むモーダル呼び出す
  const loadChange = () => {
    setIsLoadModal(!isLoadModal);
  };

  // カラーピッカーで色を保存する
  const pickUpColorSave = (e: any, i1: number) => {
    console.log(String(e.target.value));
    setColorPicker(String(e.target.value));
    selectColorFunc(i1, -1);
  };

  // タブを押すとパーツを選択できる
  const tabChange = (i: number) => {
    setTab(i);
  };

  // 色を格納する配列
  const selectColorFunc = (i1: number, i2: number | undefined) => {
    if (data) {
      updateSelectColor = [];
      // 肌の時だけ分岐
      if (data[i1].skin && i2 !== undefined) {
        skinColor = i2;
        for (let i = 0; i < data.length; i++) {
          if (i === 0 || i === 3 || i === 12) {
            updateSelectColor.push(skinColor);
          } else {
            updateSelectColor.push(selectColor[i]);
          }
        }
      } else {
        // それ以外
        for (let i = 0; i < data.length; i++) {
          if (i === i1) {
            updateSelectColor.push(i2);
          } else {
            updateSelectColor.push(selectColor[i]);
          }
        }
      }
      setSelectColor(updateSelectColor);
    }
  };

  // パーツを格納する配列
  const selectPartsFunc = (i1: number, i2: number | undefined) => {
    if (data) {
      updateSelectParts = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i1].multiple && i2 !== undefined) {
          if (i === i1) {
            let array: number[] = selectParts[i];
            let arrayLength = selectParts[i].length;
            for (let i3 = 0; i3 < selectParts[i].length; i3++) {
              if (selectParts[i][i3] === i2) {
                selectParts[i].splice(i3, 1);
                break;
              }
            }
            if (array.length === arrayLength) {
              array.push(i2);
            }
            updateSelectParts.push(array);
          } else {
            updateSelectParts.push(selectParts[i]);
          }
        } else {
          if (i === i1) {
            updateSelectParts.push([i2]);
          } else {
            updateSelectParts.push(selectParts[i]);
          }
        }
      }
      setSelectParts(updateSelectParts);
    }
  };

  // Firestoreに入れる形式に整える
  const orderCheck = async () => {
    if (data) {
      updateParts = [];
      for (let i = 0; i < data.length; i++) {
        updateParts.push({
          svg: selectParts[i],
          color: selectColor[i],
          position: {
            x: 0,
            y: 0,
          },
        });
      }
      const db = getFirestore(firebaseApp);
      const col = collection(db, 'order');
      console.log(updateParts);

      await addDoc(col, { data: updateParts });
      console.log('Firestoreに送信完了');
    }
  };

  const Preview = () => (
    <>
      {data && (
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
      )}
    </>
  );
  const Select = () => (
    <>
      {data && (
        <Box
          w={'100vw'}
          h={'calc(100vh - 56px - 280px - 64px)'}
          bg={'black100'}
          overflow={'hidden'}
          pos={'relative'}
        >
          <Flex
            as={'ul'}
            w={`calc(${data.length} * 100vw)`}
            h={'fit-content'}
            p={'40px 0'}
            transform={`translateX(calc(-${tab} * 100vw))`}
            transition={'transform 0.3s'}
            sx={{
              li: {
                flexWrap: 'wrap',
                gap: '8px',
                width: '100vw',
                height: 'fit-content',
                padding: '0 calc((100vw - (20vw * 4 + 8px * 3))/2)',
              },
            }}
          >
            {data.map((item: partsType, i1: number) => (
              <Flex as={'li'} key={item.titleEn + i1}>
                {!isColorModal ? (
                  // パーツ選択
                  <>
                    {/* 選択しない */}
                    {item.noselected && (
                      <Center
                        onClick={() => selectPartsFunc(i1, undefined)}
                        w={'20vw'}
                        h={'20vw'}
                        bg={'black200'}
                        pos={'relative'}
                        borderRadius={'16px'}
                        overflow={'hidden'}
                        sx={{
                          ...(selectParts[i1][0] === undefined && {
                            textStyle: 'hoge',
                          }),
                        }}
                      >
                        <Box
                          as={'img'}
                          src={'/img/icon_nocolor.svg'}
                          w={'55%'}
                          h={'55%'}
                        />
                      </Center>
                    )}
                    {/* 選択する */}
                    {partsSvgArray[i1].map((svg: any, i2: number) => (
                      <Center
                        key={i2 + 'parts'}
                        w={'20vw'}
                        h={'20vw'}
                        bg={'white'}
                        pos={'relative'}
                        borderRadius={'16px'}
                        overflow={'hidden'}
                        onClick={() => selectPartsFunc(i1, i2)}
                        sx={{
                          '>div': {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                          },
                          ...(i2 === selectParts[i1][0] && {
                            textStyle: 'hoge',
                          }),
                          ...(i2 === selectParts[i1][1] && {
                            textStyle: 'hoge',
                          }),
                          ...(i2 === selectParts[i1][2] && {
                            textStyle: 'hoge',
                          }),
                          ...(i2 === selectParts[i1][3] && {
                            textStyle: 'hoge',
                          }),
                          ...(i2 === selectParts[i1][4] && {
                            textStyle: 'hoge',
                          }),
                          ...(i2 === selectParts[i1][5] && {
                            textStyle: 'hoge',
                          }),
                          ...(i2 === selectParts[i1][6] && {
                            textStyle: 'hoge',
                          }),
                        }}
                      >
                        <Box
                          as={svg}
                          w={'70%'}
                          h={'70%'}
                          sx={{
                            ...(item.color !== undefined && {
                              '.colorChange': {
                                // @ts-ignore
                                fill: item.color[selectColor[i1]],
                              },
                            }),
                          }}
                        />
                      </Center>
                    ))}
                  </>
                ) : (
                  // 色選択
                  <>
                    {item.color !== undefined ? (
                      // デフォルトの中から色選択
                      <>
                        {item.color.map((color, i2) => (
                          <Box
                            onClick={() => selectColorFunc(i1, i2)}
                            key={color + i2}
                            bg={color}
                            w={'calc((100% - 8px * 4) / 5)'}
                            h={'auto'}
                            borderColor={'white'}
                            borderWidth={'5px'}
                            borderStyle={'solid'}
                            borderRadius={'9999px'}
                            overflow={'hidden'}
                            sx={{
                              ...(selectColor[i1] === i2 && {
                                borderColor: 'primary500',
                              }),
                              '&:before': {
                                content: "''",
                                display: 'block',
                                width: '100%',
                                paddingTop: '100%',
                              },
                            }}
                          />
                        ))}
                        {item.colorPicker && (
                          // カラーピッカー
                          <Flex gap={'8px'} w={'100%'} mt={'16px'}>
                            <Center
                              w={'calc((100% - 8px * 4) / 5)'}
                              pos={'relative'}
                              borderColor={'white'}
                              borderWidth={'5px'}
                              borderStyle={'solid'}
                              borderRadius={'9999px'}
                              overflow={'hidden'}
                              sx={{
                                ...(selectColor[i1] === -1 && {
                                  borderColor: 'primary500',
                                }),
                                '&:before': {
                                  content: '""',
                                  display: 'block',
                                  width: '100%',
                                  paddingTop: '100%',
                                },
                              }}
                            >
                              <Center
                                as={'input'}
                                type={'color'}
                                defaultValue={colorPicker}
                                value={colorPicker}
                                onChange={(e) => pickUpColorSave(e, i1)}
                                w={'120%'}
                                h={'120%'}
                                pos={'absolute'}
                              />
                              <Box
                                as={'img'}
                                src={'/img/icon_spuit.svg'}
                                w={'60%'}
                                h={'60%'}
                                objectFit={'contain'}
                                pos={'absolute'}
                                pointerEvents={'none'}
                              />
                            </Center>
                            <Center
                              w={'calc(100% - 8px - (100% - 8px * 4) / 5)'}
                              h={'100%'}
                              pos={'relative'}
                              fontSize={'2.5rem'}
                            >
                              <Box
                                as={'input'}
                                type={'text'}
                                value={colorPicker}
                                defaultValue={colorPicker}
                                onChange={(e) => pickUpColorSave(e, i1)}
                                placeholder={'#000000'}
                                w={'100%'}
                                h={'100%'}
                                p={'0 32px'}
                                borderRadius={'9999px'}
                                sx={{
                                  ...(selectColor[i1] === -1 &&
                                    colorPicker.length !== 7 && {
                                      background: 'tomato',
                                    }),
                                  '&::placeholder': {
                                    color: 'black200',
                                  },
                                }}
                              />
                              {/* <Text pos={'absolute'}inset={'auto auto auto 28px'}>
                          #
                        </Text> */}
                            </Center>
                          </Flex>
                        )}
                      </>
                    ) : (
                      // 色がない
                      <Center
                        bg={'black200'}
                        w={'calc((100% - 8px * 4) / 5)'}
                        h={'auto'}
                        borderColor={'white'}
                        borderWidth={'5px'}
                        borderStyle={'solid'}
                        borderRadius={'9999px'}
                        overflow={'hidden'}
                        pos={'relative'}
                        sx={{
                          '&::before': {
                            content: "''",
                            display: 'block',
                            width: '100%',
                            paddingTop: '100%',
                          },
                          '&::after': {
                            content: "''",
                            display: 'block',
                            width: '50%',
                            height: '50%',
                            background:
                              "url('/img/icon_nocolor.svg') no-repeat",
                            position: 'absolute',
                          },
                        }}
                      />
                    )}
                  </>
                )}
              </Flex>
            ))}
          </Flex>
        </Box>
      )}
    </>
  );
  const ColorSelect = () => (
    <Center
      as={'button'}
      onClick={() => colorChange()}
      w={'64px'}
      h={'64px'}
      bg={'primary500'}
      borderRadius={'9999px'}
      pos={'absolute'}
      inset={'200px 16px auto auto'}
      zIndex={'10'}
      transition={'background 0.2s'}
      sx={{
        ...(isColorModal && {
          background: 'secondary500',
        }),
      }}
    >
      <Box
        as={'img'}
        src={!isColorModal ? '/img/icon_palette.svg' : '/img/icon_nocolor.svg'}
        objectFit={'contain'}
        sx={{
          ...(!isColorModal
            ? { width: '55%', height: '55%' }
            : { width: '40%', height: '40%' }),
        }}
      />
    </Center>
  );
  // 下書きを読み込むモーダル
  const LoadModal = () => {
    return (
      <Box
        w={'100vw'}
        h={'calc(100vh - 64px)'}
        bg={'white'}
        p={'32px 5vw 0'}
        pos={'fixed'}
        inset={'64px 0 auto auto'}
        zIndex={'30'}
        transform={'translateY(100%)'}
        transition={'transform 0.3s'}
        sx={{
          ...(isLoadModal && {
            transform: 'translateY(0)',
          }),
        }}
      >
        <Heading data={'既にあるデザインから選ぶ'} />
        <OriginalSpacer size={'15vh'} />
        <Flex justifyContent={'space-between'}>
          {nuiMakeArray.map((item: nuiMakeArrayType, i: number) => (
            <NextLink href={item.path} passHref key={i + item.path}>
              <Center
                flexDirection={'column'}
                gap={'8px'}
                w={'160px'}
                p={'32px 0'}
                bg={'white'}
                fontSize={'1.6rem'}
                fontWeight={'bold'}
                boxShadow={'0 0 10px rgba(0, 0, 0, 0.2)'}
                borderRadius={'24px'}
              >
                <Box as={'img'} src={`/img/icon_make_${item.path}.svg`} />
                <Text>{item.text}</Text>
              </Center>
            </NextLink>
          ))}
        </Flex>
        <OriginalSpacer size={'24px'} />
        <Text
          w={'fit-content'}
          m={'auto'}
          textDecor={'underline'}
          onClick={() => loadChange()}
        >
          カスタマイズに戻る
        </Text>
      </Box>
    );
  };

  return (
    <>
      {data && (
        <Flex flexDirection={'column'} h={'100vh'}>
          <Navigation />
          <Flex
            as={'section'}
            flexDirection={'column'}
            alignItems={'center'}
            pos={'relative'}
          >
            <Preview />
            {/* Tab */}
            <Box
              w={'100vw'}
              h={'56px'}
              bg={'white'}
              overflowX={'scroll'}
              pos={'relative'}
            >
              <Flex flexWrap={'wrap'} w={`calc(${data.length - 2} * 21vw)`}>
                {data.map((item: partsType, i: number) => (
                  <Center
                    key={item.titleEn + i}
                    onClick={() => tabChange(i)}
                    w={'21vw'}
                    h={'56px'}
                    opacity={1}
                    filter={'none'}
                    transition={'filter 0.2s, opacity 0.2s'}
                    sx={{
                      ...(i > data.length - 3 && {
                        display: 'none',
                      }),
                      ...(i !== tab && {
                        filter: 'grayscale(100%)',
                        opacity: 0.2,
                      }),
                    }}
                  >
                    <Box
                      as={partsSvgArray[i][selectParts[i][0]]}
                      w={'55%'}
                      h={'55%'}
                      objectFit={'contain'}
                      sx={{
                        ...(item.color !== undefined && {
                          '.colorChange': {
                            fill: item.color[selectColor[i]],
                          },
                        }),
                      }}
                    />
                  </Center>
                ))}
              </Flex>
            </Box>
            <Select />
            <ColorSelect />
            {/* ----------------------------------
                下書き読み込みボタン
            ---------------------------------- */}
            <Center
              as={'button'}
              onClick={() => loadChange()}
              w={'56px'}
              h={'56px'}
              bg={'white'}
              borderRadius={'9999px'}
              pos={'absolute'}
              inset={'136px 16px auto auto'}
              zIndex={'10'}
              transition={'background 0.2s'}
              borderStyle={'width'}
              borderWidth={'3px'}
              borderColor={'primary500'}
            >
              <Box
                as={'img'}
                src={'/img/icon_read.svg'}
                width={'50%'}
                height={'50%'}
                objectFit={'contain'}
              />
            </Center>
            {isLoadModal && <LoadModal />}
            {/* ----------------------------------
                確認ボタン
            ---------------------------------- */}
            <Center
              as={'button'}
              onClick={() => orderCheck()}
              pos={'absolute'}
              inset={'auto auto 40px auto'}
              zIndex={'10'}
            >
              確認
            </Center>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default Custom;
