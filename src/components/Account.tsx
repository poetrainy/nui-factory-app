import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import OriginalSpacer from './OriginalSpacer';

type Props = {
  data?: string;
};

const accountLink = [
  [
    {
      text: '下書き',
      path: '',
    },
    {
      text: '過去に読み込んだレシピ',
      path: '',
    },
    {
      text: 'レシピを読み込む',
      path: '',
    },
  ],
  [
    {
      text: '注文履歴',
      path: 'order-history',
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
      path: 'help',
    },
    {
      text: 'お問い合わせ',
      path: 'contact',
    },
  ],
];

const Account: FC<Props> = ({ data }) => {
  return (
    <Box
      w="80vw"
      h="100vh"
      bg="white"
      p="64px 0 0 10vw"
      pos="fixed"
      inset="0 auto auto 0"
      zIndex="30"
      boxShadow="20vw 0 0 rgba(0, 0, 0, 0.5)"
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
            {list.map((item) => (
              <NextLink href={`/${item.path}`} passHref key={item.path}>
                {item.text}
              </NextLink>
            ))}
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Account;
