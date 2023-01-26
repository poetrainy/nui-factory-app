import { Box, Center, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
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
        <Flex
          flexDirection={'column'}
          w={'90vw'}
          gap={'8px'}
          m={'auto'}
          sx={{
            '>div': {
              gap: '16px',
              width: '100%',
              borderRadius: '8px',
            },
          }}
        >
          <NextLink href={'/custom'} passHref>
            <Flex w={'100%'} h={'200px'} bg={'yellow300'}>
              <Box
                as={'img'}
                src={'/img/index_nui_02.svg'}
                w={'48px'}
                h={'48px'}
              />
              <Text w={'fit-content'} fontWeight={'bold'}>
                ぬいぐるみを作る！
              </Text>
            </Flex>
          </NextLink>
          {nuiMakeArray.map((item: nuiMakeArrayType, i: number) => (
            <NextLink href={`/${item.path}`} passHref key={item.path + i}>
              <Flex
                alignItems={'center'}
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
        <Box w={'100vw'} h={'144px'} bg={'primary500'}>
          ぬいふぁくってなに？
        </Box>
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
