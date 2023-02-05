import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Navigation from 'src/components/Navigation';
import { category } from 'src/libs/category';
import { goodsType } from 'src/types/goods';
import OriginalSpacer from 'src/components/OriginalSpacer';
import EcCategoryText from 'src/components/EcCategoryText';
import { goodsApi } from 'src/libs/goods';
import Button from 'src/components/Button';

type Props = {
  id: string;
  data: goodsType;
};

const CategoryItem: NextPage<Props> = ({ id, data }) => {
  return (
    <>
      <Navigation />
      <Box as={'main'} w={'80vw'} mx={'auto'}>
        <OriginalSpacer size={'40px'} />
        <Box>
          <Box w={'100%'} pt={'100%'} bg={'black100'} />
          <OriginalSpacer size={'16px'} />
          <Flex as={'ul'} gap={'8px'}>
            {data.img.map((item, i) => (
              <Box as={'li'} key={item + i} w={'56px'} h={'56px'}>
                <Box
                  w={'100%'}
                  h={'100%'}
                  bg={'black100'}
                  objectFit={'cover'}
                />
              </Box>
            ))}
          </Flex>
        </Box>
        <OriginalSpacer size={'32px'} />
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <EcCategoryText data={data.category} />
          <Flex as={'ul'} gap={'6px'}>
            {data.color.map((item, i) => (
              <Box
                key={item + i}
                w={'20px'}
                h={'20px'}
                borderRadius={'9999px'}
                bg={item}
                sx={{
                  ...(String(item) === 'white' && {
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'black200',
                  }),
                }}
              />
            ))}
          </Flex>
        </Flex>
        <OriginalSpacer size={'12px'} />
        <Text color={'black300'} fontSize={'1.1rem'}>
          商品番号：{data.serial}
        </Text>
        <Text fontSize={'2rem'} fontWeight={'bold'}>
          {data.name}
        </Text>
        <OriginalSpacer size={'16px'} />
        <Box
          color={'black300'}
          bg={'#F1F1F1'}
          p={'18px 12px'}
          fontSize={'1rem'}
          borderRadius={'12px'}
        >
          <Text fontWeight={'bold'}>商品詳細</Text>
          <OriginalSpacer size={'4px'} />
          <Text>
            素材：ポリエステル100%
            <br />
            サイズ：W100*H100（ぬいふぁく！ぬいにぴったり仕様）
          </Text>
        </Box>
      </Box>
      <Button data={'色を選択'} fixed fav />
      <OriginalSpacer size={'120px'} />
    </>
  );
};

export default CategoryItem;

export const getStaticPaths = async () => {
  let categoryPath: string[] = [];
  for (let i = 0; i < category.length; i++) {
    categoryPath.push(category[i].path);
  }

  const paths: {
    params: { category: string; id: string };
  }[] = [];
  categoryPath.forEach((category) => {
    let idPath: number[] = [];
    for (let i = 0; i < goodsApi.length; i++) {
      if (goodsApi[i].category === category) {
        idPath.push(goodsApi[i].id);
      }
    }
    idPath.forEach((i) => {
      paths.push({
        params: {
          id: String(i),
          category,
        },
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const productData = goodsApi.filter(
    (item: goodsType) => item.id === Number(params.id)
  );

  return {
    props: {
      id: params.id,
      data: productData[0],
    },
  };
};
