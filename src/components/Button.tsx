import { FC } from 'react';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import OriginalSpacer from 'src/components/OriginalSpacer';

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
  path?: string;
  policy?: boolean;
  inline?: boolean;
  fixed?: boolean;
  fav?: boolean;
};

const Button: FC<Props> = ({
  data,
  textIndex,
  path,
  policy,
  inline,
  fixed,
  fav,
}) => {
  const Policy = () => (
    <>
      {policy && (
        <>
          <Flex>
            <Box as={'input'} type={'checkbox'} />
            <Text>
              <Text as={'span'}>利用規約</Text>と
              <Text as={'span'}>プライバシーポリシー</Text>に同意
            </Text>
          </Flex>
          <OriginalSpacer size={'20px'} />
        </>
      )}
    </>
  );
  const Fav = () => (
    <>
      {fav && (
        <Center
          w={'56px'}
          h={'56px'}
          borderRadius={'9999px'}
          ml={'16px'}
          sx={{
            '>svg': {
              '>fill': {
                path: 'primary500',
              },
            },
          }}
        >
          <Box as={'img'} src={'/img/icon_fav.svg'} w="20px" h="20px" />
        </Center>
      )}
    </>
  );
  const Supplement = () => (
    <>
      {textIndex && (
        <>
          <OriginalSpacer size={'20px'} />
          <Flex flexDirection={'column'} gap={'6px'}>
            {textIndex.map((item, i) => (
              <Text
                key={text[item].id}
                color={'black300'}
                fontSize={'1.3rem'}
                textAlign={'center'}
                textDecor={'underline'}
                _hover={{
                  cursor: 'pointer',
                  textDecor: 'none',
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

  const ButtonContent = () => (
    <Center
      h={'56px'}
      color={'white'}
      bg={'primary500'}
      fontSize={'1.6rem'}
      borderRadius={'9999px'}
      fontWeight={'bold'}
      opacity={'1'}
      transition={'opacity 0.2s'}
      _hover={{
        opacity: '0.7',
        cursor: 'pointer',
      }}
      sx={{
        ...(inline
          ? {
              width: 'fit-content',
              padding: '0 56px',
            }
          : {
              width: '100%',
              maxWidth: '400px',
            }),
      }}
    >
      {data}
    </Center>
  );

  return (
    <>
      {!fixed && <OriginalSpacer size={'48px'} />}
      <Policy />
      <Center
        gap={'16px'}
        sx={{
          ...(fixed && {
            position: 'fixed',
            inset: 'auto auto 40px auto',
            ...(!inline && {
              width: '90vw',
              maxWidth: '400px',
            }),
          }),
        }}
      >
        {path ? (
          <NextLink href={`${path}`} passHref>
            <ButtonContent />
          </NextLink>
        ) : (
          <ButtonContent />
        )}
        <Fav />
      </Center>
      <Supplement />
    </>
  );
};

export default Button;
