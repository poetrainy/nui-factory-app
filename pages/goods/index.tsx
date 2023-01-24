import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Heading from '../../src/components/Heading';
import Navigation from '../../src/components/Navigation';
import Product from '../../src/components/Product';
import { goodsApi } from '../../src/libs/api';
import { category } from '../../src/libs/category';
import { goodsType } from '../../src/types/goods';

type Props = {
  data: goodsType[];
};

const Favorite: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Navigation />
      <Box as="section" textStyle="bodyWidth">
        <Heading data="服を着せる" />
        <Product data={data} />
      </Box>
    </>
  );
};

export default Favorite;

export const getStaticProps = async ({}) => {
  const response = await fetch(`${goodsApi}`);
  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
};
