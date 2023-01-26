import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { category } from '../libs/category';
import NextLink from 'next/link';

const EcCategory: FC = () => {
  return (
    <Flex as="ul" justifyContent="space-between" flexWrap="wrap" gap="16px 0">
      {category.map((item, i) => (
        <Box
          as="li"
          w="48%"
          key={item.path + i}
          sx={{
            '>a': {
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '8px',
              width: '100%',
            },
          }}
        >
          <NextLink href={'/goods/' + item.path} passHref>
            <Center w="48px" h="48px" bg="secondary500" borderRadius="9999px">
              <Box
                as="img"
                src={'/img/icon_category_' + item.path + '.svg'}
                w="28px"
                h="28px"
                objectFit="contain"
              />
            </Center>
            <Text as="span">
              {item.heading}
            </Text>
          </NextLink>
        </Box>
      ))}
    </Flex>
  );
};

export default EcCategory;
