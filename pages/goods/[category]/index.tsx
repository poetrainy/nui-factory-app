import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Navigation from '../../../src/components/Navigation';
import Heading from '../../../src/components/Heading';
import { category } from '../../../src/libs/category';
import { goodsType } from '../../../src/types/goods';
import { categoryType } from '../../../src/types/example';
import Product from '../../../src/components/Product';
import { goodsApi } from '../../../src/libs/api';

type Props = {
  id: string;
  data: goodsType[];
};

const CategoryTop: NextPage<Props> = ({ id, data }) => {
  const heading = category.filter((item: categoryType) => item.path === id)[0]
    .heading;

  return (
    <>
      <Navigation />
      <Box as="section" textStyle="bodyWidth">
        <Heading data={heading} back="服を着せる" />
        <Product data={data} />
      </Box>
    </>
  );
};

export default CategoryTop;

export const getStaticPaths = () => {
  const paths = category.map((item) => ({ params: { category: item.path } }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { category: string };
}) => {
  const response = await fetch(`${goodsApi}`);
  const data = await response.json();
  const categoryOfData = data.filter(
    (item: goodsType) => item.category[0] === params.category
  );

  return {
    props: {
      id: params.category,
      data: categoryOfData,
    },
  };
};
