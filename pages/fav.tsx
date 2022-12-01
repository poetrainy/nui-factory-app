import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Card from '../src/components/Card';
import Heading from '../src/components/Heading';
import Navigation from '../src/components/Navigation';

const Favorite: NextPage = () => {
  return (
    <>
      <Navigation />
      <Box as="section" textStyle="bodyWidth">
        <Heading data="お気に入りした商品" />
        <Card />
      </Box>
    </>
  );
};

export default Favorite;
