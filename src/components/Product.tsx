import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import OriginalSpacer from './OriginalSpacer';
import EcCategory from './EcCategory';
import { goodsType } from '../types/goods';
import NextLink from 'next/link';

type Props = {
  data: goodsType[];
};

const Product: FC<Props> = ({ data }) => {
  return (
    <Flex as="ul" flexDirection="column" gap="16px" w="100%">
      {data.map((item) => (
        <Flex
          as="li"
          key={item.name + item.id}
          justifyContent="space-between"
          w="100%"
          sx={{
            '>a': {
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            },
          }}
        >
          <NextLink href={item.category + '/' + item.id} passHref>
            <Flex
              justifyContent="center"
              flexDirection="column"
              w="calc(100% - 120px - 5%)"
            >
              <EcCategory data={item.category} />
              <OriginalSpacer size="4px" />
              <Text fontSize="1.7rem" fontWeight="bold">
                {item.name}
              </Text>
              <OriginalSpacer size="4px" />
              <Flex as="ul" gap="4px">
                {item.color.map((color: string, i: number) => (
                  <Box
                    key={color + i}
                    w="12px"
                    h="12px"
                    borderRadius="9999px"
                    bg={color}
                    sx={{
                      ...(String(color) === 'white' && {
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: 'black200',
                      }),
                    }}
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
          </NextLink>
        </Flex>
      ))}
    </Flex>
  );
};

export default Product;
