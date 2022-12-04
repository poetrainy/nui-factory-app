import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Heading from '../../src/components/Heading';
import Navigation from '../../src/components/Navigation';
import OriginalSpacer from '../../src/components/OriginalSpacer';
import { goodsType } from '../../src/types/goods';
import Product from '../../src/components/Product';
import NextLink from 'next/link';
import { historyType } from '../../src/types/example';
import { goodsApi, orderApi } from '../../src/libs/api';

type Props = {
  goodsData: goodsType[];
  historyData: historyType[];
};

const history: NextPage<Props> = ({ goodsData, historyData }) => {
  return (
    <>
      <Navigation />
      <Box as="section" textStyle="bodyWidth">
        <Heading data="注文履歴" />
        {historyData.map((item, i) => (
          <Box key={i}>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="1.2rem">
                注文日：{item.date.yyyy}年{item.date.mm}月{item.date.dd}日
              </Text>
              <NextLink href={`/order-history/${item.id}`} passHref>
                <Flex
                  as="span"
                  display="block"
                  justifyContent="space-between"
                  alignItems="center"
                  p="8px 16px"
                  border="1px solid #E8E8E8"
                  borderRadius="4px"
                  fontSize="1.3rem"
                >
                  確認
                </Flex>
              </NextLink>
            </Flex>
            <OriginalSpacer size="12px" />
            {item.productId.map((id) => (
              <Product data={[goodsData[id]]} />
            ))}
            {/* item.productIdを配列に入れ込むもっといい方法考える */}
            <OriginalSpacer size="16px" />
            <Text w="fit-content" ml="auto" fontSize="1.2rem">
              注文番号：{item.order}
            </Text>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default history;

export const getStaticProps = async () => {
  const goodResponse = await fetch(`${goodsApi}`);
  const goodsData = await goodResponse.json();
  const historyResponse = await fetch(`${orderApi}`);
  const historyData = await historyResponse.json();

  return {
    props: {
      goodsData: goodsData,
      historyData: historyData,
    },
  };
};
