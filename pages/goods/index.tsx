import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Content from 'src/components/Content';
import EcCategory from 'src/components/EcCategory';
import OriginalSpacer from 'src/components/OriginalSpacer';
import Product from 'src/components/Product';
import { goodsApi } from 'src/libs/goods';

const Goods: NextPage = () => {
  type GoodsContentsArrayType = {
    text: string;
    component: JSX.Element;
  };

  const GoodsContentsArray: GoodsContentsArrayType[] = [
    {
      text: 'カテゴリーから選ぶ',
      component: <EcCategory />,
    },
    {
      text: 'おすすめから選ぶ',
      component: <Product data={goodsApi} />,
    },
  ];

  const Component = () => (
    <Flex flexDirection={'column'} gap={'32px'}>
      {GoodsContentsArray.map((item: GoodsContentsArrayType, i: number) => (
        <Box key={item.text + i}>
          <Text fontWeight={'bold'} fontSize={'1.5rem'}>
            {item.text}
          </Text>
          <OriginalSpacer size={'16px'} />
          {item.component}
        </Box>
      ))}
    </Flex>
  );

  return <Content head={'服を着せる'} component={<Component />} isFoot />;
};

export default Goods;
