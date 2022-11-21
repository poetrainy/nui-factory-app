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
      <Heading as="h1" pos="absolute" inset="0 0 0 0" m="auto">
        <NextLink href="/" passHref>
          <Box as="a">ぬいふぁく！</Box>
        </NextLink>
      </Heading>
      {/* <Flex>
        {nav.map((item) => (
          <NextLink href={`/${item.path}`} passHref key={item.path}>
            <Box as="a">
              <Box as={item.icon} w="24px" height="24px" />
            </Box>
          </NextLink>
        ))}
      </Flex> */}
    </Flex>
  );
};

export default Navigation;
