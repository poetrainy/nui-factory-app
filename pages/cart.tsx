import type { NextPage } from 'next';
import Card from 'src/components/Card';
import Content from 'src/components/Content';

const Cart: NextPage = () => {
  return <Content head="カート" component={<Card />} />;
};

export default Cart;
