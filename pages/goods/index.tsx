import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Heading from '../../src/components/Heading';
import Textarea from '../../src/components/Textarea';
import Button from '../../src/components/Button';
import Navigation from '../../src/components/Navigation';
import OriginalSpacer from '../../src/components/OriginalSpacer';

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
