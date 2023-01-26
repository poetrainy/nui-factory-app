import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import OriginalSpacer from 'src/components/OriginalSpacer';
import Product from 'src/components/Product';
import { historyType } from 'src/types/example';
import EditButton from 'src/components/EditButton';
import Content from 'src/components/Content';
import { historyApi } from 'src/libs/history';
import { goodsApi } from 'src/libs/goods';

const History: NextPage = () => {
  const Component = () => (
    <>
      {historyApi.map((item: historyType, i: number) => (
        <Box key={i}>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Text fontSize={'1.2rem'}>
              注文日：{item.date.yyyy}年{item.date.mm}月{item.date.dd}日
            </Text>
            <EditButton data={'確認'} path={`/order-history/${item.id}`} />
          </Flex>
          <OriginalSpacer size={'12px'} />
          {item.productId.map((id) => (
            <Product data={[goodsApi[id]]} />
          ))}
          {/* item.productIdを配列に入れ込むもっといい方法考える */}
          <OriginalSpacer size={'16px'} />
          <Text w={'fit-content'} ml={'auto'} fontSize={'1.2rem'}>
            注文番号：{item.order}
          </Text>
        </Box>
      ))}
    </>
  );

  return <Content head={'注文履歴'} component={<Component />} />;
};

export default History;
