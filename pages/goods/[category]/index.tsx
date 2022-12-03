import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Navigation from '../../../src/components/Navigation';
import Heading from '../../../src/components/Heading';
import { category } from '../../../src/libs/category';
import { goodsType } from '../../../src/types/goods';
import { categoryType } from '../../../src/types/example';
import OriginalSpacer from '../../../src/components/OriginalSpacer';
// import goodsApi from '../../api/goods';

const goodsApi = 'http://localhost:3000/api/goods';

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
        <Flex as="ul" flexDirection="column" gap="16px">
          {data.map((item) => (
            <Flex
              as="li"
              justifyContent="space-between"
              key={item.name + item.id}
            >
              <Flex
                justifyContent="center"
                flexDirection="column"
                w="calc(100% - 120px - 5%)"
              >
                <Flex gap="6px" transform="traslateY(-1px)">
                  {item.category.map((category, i) => (
                    <Text
                      key={category.length + i + ''}
                      w="fit-content"
                      color="white"
                      bg="secondary500"
                      p="3px 12px"
                      fontSize="1.1rem"
                      fontWeight="bold"
                      borderRadius="9999px"
                    >
                      {category}
                    </Text>
                  ))}
                </Flex>
                <OriginalSpacer size="4px" />
                <Text fontSize="1.7rem" fontWeight="bold">
                  {item.name}
                </Text>
                <OriginalSpacer size="4px" />
                <Flex as="ul" gap="4px">
                  {item.color.map((color, i) => (
                    <Box
                      key={color + i}
                      w="12px"
                      h="12px"
                      borderRadius="9999px"
                      bg={color}
                    />
                  ))}
                </Flex>
                <OriginalSpacer size="12px" />
                <Text>
                  <Text as="span" fontSize="2rem" fontWeight="bold">
                    ¥{item.price}
                  </Text>
                  <Text
                    as="span"
                    color="black200"
                    fontSize="1.3rem"
                    fontWeight="bold"
                  >
                    （税込）
                  </Text>
                </Text>
              </Flex>
              <Box w="120px" h="120px" bg="black200" />
            </Flex>
          ))}
        </Flex>
      </Box>
    </>
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
  const response = await fetch(`${goodsApi}`);
  const data = await response.json();
  const categoryOfData = data.filter(
    (item: goodsType) => item.category[0] === params.category
  );
  console.log(params.category);

  return {
    props: {
      id: params.category,
      data: categoryOfData,
    },
  };
};
