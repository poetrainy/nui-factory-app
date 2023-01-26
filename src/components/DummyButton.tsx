import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import OriginalSpacer from 'src/components/OriginalSpacer';

type Props = {
  data: string;
  inline?: boolean;
  fixed?: boolean;
  fav?: boolean;
  policy?: boolean;
};

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

const DummyButton: FC<Props> = ({ data, inline, fixed, fav, policy }) => {
  return (
    <>
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
      <Center
        gap="16px"
        sx={{
          ...(fixed && {
            position: 'fixed',
            inset: 'auto auto 40px 5vw',
            ...(!inline && {
              width: '90vw',
              maxWidth: '400px',
            }),
          }),
        }}
      >
        <Center
          h="56px"
          color="white"
          bg="primary500"
          fontSize="1.6rem"
          fontWeight="bold"
          borderRadius="9999px"
          opacity="1"
          transition="opacity 0.2s"
          _hover={{
            opacity: '0.7',
            cursor: 'pointer',
          }}
          sx={{
            // ...(!fixed && {
            ...(inline
              ? {
                  width: 'fit-content',
                  padding: '0 56px',
                }
              : {
                  width: '100%',
                  maxWidth: '400px',
                }),
            // }),
          }}
        >
          {data}
        </Center>
        {fav && (
          <Center
            w="56px"
            h="56px"
            borderRadius="9999px"
            sx={{
              '>svg': {
                '>fill': {
                  path: 'primary500',
                },
              },
            }}
          >
            <Box as="img" src="/img/icon_fav.svg" />
          </Center>
        )}
      </Center>
    </>
  );
};

export default DummyButton;
