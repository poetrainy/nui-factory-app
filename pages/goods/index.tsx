import type { NextPage } from 'next';
import Content from '../../src/components/Content';
import Product from '../../src/components/Product';
import { goodsApi } from '../../src/libs/goods';

const Goods: NextPage = () => {
  return (
    <Content head="服を着せる" component={<Product data={goodsApi} />} isFoot />
  );
};

export default Goods;
