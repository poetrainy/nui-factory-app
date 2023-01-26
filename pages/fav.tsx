import type { NextPage } from 'next';
import Card from 'src/components/Card';
import Content from 'src/components/Content';

const Favorite: NextPage = () => {
  return <Content head={'お気に入りした商品'} component={<Card />} />;
};

export default Favorite;
