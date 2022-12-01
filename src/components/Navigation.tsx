import { FC } from 'react';
import NextLink from 'next/link';
import { Box, Flex, Heading } from '@chakra-ui/react';
import CartIcon from '../assets/icon-cart';
import FavIcon from '../assets/icon-fav';

const nav = [
  { icon: CartIcon, path: 'cart' },
  { icon: FavIcon, path: 'fav' },
];

const Navigation: FC = () => {
  return (
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
                <Box as={item.icon} w="24px" height="24px" />
              </Box>
            </NextLink>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navigation;
