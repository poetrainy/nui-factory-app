import type { NextPage } from 'next';
import { category } from 'src/libs/category';
import { goodsType } from 'src/types/goods';
import { categoryType } from 'src/types/example';
import { goodsApi } from 'src/libs/goods';
import Product from 'src/components/Product';
import Content from 'src/components/Content';

type Props = {
  id: string;
  data: goodsType[];
};

const CategoryTop: NextPage<Props> = ({ id, data }) => {
  const heading = category.filter((item: categoryType) => item.path === id)[0]
    .heading;

  return (
    <Content
      head={heading}
      back="服を着せる"
      backPath="/goods"
      component={<Product data={data} />}
      isFoot
    />
  );
};

export default CategoryTop;

export const getStaticPaths = () => {
  const paths = category.map((item) => ({ params: { category: item.path } }));

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
  const categoryOfData = goodsApi.filter(
    (item: goodsType) => item.category === params.category
  );

  return {
    props: {
      id: params.category,
      data: categoryOfData,
    },
  };
};
