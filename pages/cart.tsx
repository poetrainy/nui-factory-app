import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Account from '../src/components/Account';
import Card from '../src/components/Card';
import Heading from '../src/components/Heading';
import Navigation from '../src/components/Navigation';

const Cart: NextPage = () => {
  return (
    <>
      <Navigation />
      <Box as="section" textStyle="bodyWidth">
        <Heading data="カート" />
        <Card />
      </Box>
    </>
  );
};

export default Cart;
