import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Heading from '../../src/components/Heading';
import Navigation from '../../src/components/Navigation';

const Favorite: NextPage = () => {
  return (
    <>
      <Navigation />
      <Box as="section" textStyle="bodyWidth">
        <Heading data="ふくいちらん" />
      </Box>
    </>
  );
};

export default Favorite;
