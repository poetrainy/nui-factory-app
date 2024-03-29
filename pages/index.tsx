import type { NextPage } from 'next';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import Content from 'src/components/Content';
import NextLink from 'next/link';
import OriginalSpacer from 'src/components/OriginalSpacer';
import { nuiMakeArray } from 'src/libs/nuiMakeArray';
import { nuiMakeArrayType } from 'src/types/nuiMake';
import EcCategory from 'src/components/EcCategory';

const Home: NextPage = () => {
  const Component = () => {
    return (
      <>
        <Flex flexDirection={'column'} w={'90vw'} gap={'8px'} m={'auto'}>
          <NextLink href={'/custom'} passHref>
            <Center gap={'16px'} w={'100%'} h={'200px'} bg={'yellow300'}>
              <Flex
                justifyContent={'center'}
                alignItems={'flex-end'}
                w={'120px'}
                h={'120px'}
                bg={'white'}
                borderRadius={'9999px'}
                overflow={'hidden'}
              >
                <Box
                  as={'img'}
                  src={'/img/index_nui_02.svg'}
                  w={'95%'}
                  h={'95%'}
                />
              </Flex>
              <Text w={'fit-content'} fontWeight={'bold'}>
                ぬいぐるみを作る！
              </Text>
            </Center>
          </NextLink>
          {nuiMakeArray.map((item: nuiMakeArrayType, i: number) => (
            <NextLink href={`/${item.path}`} passHref key={item.path + i}>
              <Flex
                alignItems={'center'}
                gap={'8px'}
                h={'72px'}
                bg={'#dd705e1a'}
                p={'0 32px'}
              >
                <Box
                  as={'img'}
                  src={'/img/icon_make_' + item.path + '.svg'}
                  w={'48px'}
                  h={'48px'}
                />
                <Text w={'fit-content'} fontWeight={'bold'}>
                  {item.text}
                </Text>
              </Flex>
            </NextLink>
          ))}
        </Flex>
        <OriginalSpacer size={'24px'} />
        {/* ぬいふぁくってなに？ */}
        {/* <Box w={'100vw'} h={'144px'} bg={'primary500'}>
        </Box> */}
        <OriginalSpacer size={'40px'} />
        <Box w={'85vw'} m={'auto'}>
          <Text as={'h2'} fontSize={'2rem'} fontWeight={'bold'}>
            ぬい服を着せる
          </Text>
          <OriginalSpacer size={'16px'} />
          <EcCategory />
        </Box>
      </>
    );
  };

  return <Content component={<Component />} index isFoot />;
};

export default Home;
