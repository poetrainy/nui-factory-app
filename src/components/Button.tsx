import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import OriginalSpacer from './OriginalSpacer';

const text = [
  {
    id: 0,
    text: '認証コードが届かない',
    path: '',
  },
  {
    id: 1,
    text: '会員の方はこちらからログイン',
    path: 'signin/sms',
  },
  {
    id: 2,
    text: '会員でない方は新規会員登録',
    path: 'signup/sms',
  },
];

type Props = {
  data: string;
  textIndex?: number[];
  path: string;
  policy?: boolean;
};

const Button: FC<Props> = ({ data, textIndex, path, policy }) => {
  return (
    <>
      <OriginalSpacer size="48px" />
      {policy && (
        <>
          <Flex>
            <Box as="input" type="checkbox" />
            <Text>
              <Text as="span">利用規約</Text>と
              <Text as="span">プライバシーポリシー</Text>に同意
            </Text>
          </Flex>
          <OriginalSpacer size="20px" />
        </>
      )}
      <Flex
        as="a"
        href={`${path}`}
        display="flex"
        alignItems="center"
        w="fit-content"
        h="48px"
        color="white"
        bg="primary500"
        m="0 auto"
        p="0 32px"
        borderRadius="9999px"
        fontWeight="bold"
      >
        {data}
      </Flex>
      {textIndex !== undefined && (
        <>
          <OriginalSpacer size="20px" />
          <Flex flexDirection="column" gap="6px">
            {textIndex.map((item, i) => (
              <Text
                key={text[item].id}
                color="black300"
                fontSize="1.3rem"
                textAlign="center"
                textDecoration="underline"
                _hover={{
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                {text[item].text}
              </Text>
            ))}
          </Flex>
        </>
      )}
    </>
  );
};

export default Button;
