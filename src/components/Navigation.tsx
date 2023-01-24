import { FC, useState } from 'react';
import NextLink from 'next/link';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import CartIcon from '../assets/icon-cart';
import FavIcon from '../assets/icon-fav';
import OriginalSpacer from './OriginalSpacer';
// import Account from './Account';

const nav = [
  { icon: CartIcon, path: 'cart' },
  { icon: FavIcon, path: 'fav' },
];

const Navigation: FC = () => {
  const [accountFlag, setAccountFlag] = useState<boolean>(false);

  const accountModal = () => {
    setAccountFlag(!accountFlag);
  };

  const Account = () => {
    const accountLink = [
      [
        {
          text: '下書き',
          path: 'load/draft',
        },
        {
          text: '過去に読み込んだレシピ',
          path: 'load/already',
        },
        {
          text: 'レシピを読み込む',
          path: 'load',
        },
      ],
      [
        {
          text: '注文履歴',
          path: '',
        },
        {
          text: 'クーポン一覧',
          path: 'coupon',
        },
      ],
      [
        {
          text: 'ユーザー情報変更',
          path: 'setting',
        },
      ],
      [
        {
          text: '困ったときは',
          path: '',
        },
        {
          text: 'お問い合わせ',
          path: '',
        },
      ],
    ];
    return (
      <Box pos="relative" zIndex="30">
        <Box
          w="80vw"
          h="100vh"
          bg="white"
          p="64px 0 0 10vw"
          pos="fixed"
          inset="0 auto auto 0"
          zIndex="30"
          sx={{
            transform: 'translateX(-100%)',
            transition: 'transform 0.3s',
            ...(accountFlag && {
              transform: 'translateX(0)',
            }),
          }}
        >
          <Text fontSize="1.6rem" fontWeight="bold">
            <Text as="span" color="tomato">
              名前
            </Text>
            <Text as="span">様</Text>
          </Text>
          <OriginalSpacer size="40px" />
          <Flex flexDirection="column" gap="32px" fontSize="1.3rem">
            {accountLink.map((list, i) => (
              <Flex flexDirection="column" gap="16px" key={i}>
                {list.map((item, i) => (
                  <NextLink href={`/${item.path}`} passHref key={item.path + i}>
                    {item.text}
                  </NextLink>
                ))}
              </Flex>
            ))}
          </Flex>
        </Box>
        <Box
          w="100vw"
          h="100vh"
          pos="absolute"
          inset="0 0 0 0"
          bg="rgba(0, 0, 0, 0.2)"
          transition="opacity 0.2s"
          opacity="0"
          pointerEvents="none"
          onClick={() => accountModal()}
          sx={{
            ...(accountFlag && {
              opacity: '1',
              pointerEvents: 'auto',
            }),
          }}
        />
      </Box>
    );
  };

  return (
    <>
      <Account />
      <Flex
        justifyContent="space-between"
        alignItems="center"
        h="48px"
        p="0 5vw"
        pos="relative"
      >
        <Flex
          justifyContent="center"
          alignContent="center"
          w="20px"
          h="20px"
          pos="relative"
          sx={{
            span: {
              width: '100%',
              height: '3px',
              background: 'black500',
              position: 'absolute',
            },
          }}
          onClick={() => accountModal()}
        >
          <Box as="span" inset="0 0 auto auto" />
          <Box as="span" m="0 auto" />
          <Box as="span" inset="auto 0 0 auto " />
        </Flex>
        <Heading
          as="h1"
          w="fit-content"
          pos="absolute"
          inset="0 0 0 0"
          m="auto"
          sx={{
            a: {
              display: 'flex',
              alignItems: 'center',
              height: '100%',
            },
          }}
        >
          <NextLink href="/" passHref>
            ぬいふぁく！
          </NextLink>
        </Heading>
        <Flex as="ul" gap="8px">
          {nav.map((item) => (
            <Box as="li" key={item.path}>
              <NextLink href={`/${item.path}`} passHref>
                <Box as="span">
                  <Box as={item.icon} w="20px" height="20px" />
                </Box>
              </NextLink>
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default Navigation;
