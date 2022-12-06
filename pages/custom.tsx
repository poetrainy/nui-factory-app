import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { partsApi } from '../src/libs/api';
import { partsType } from '../src/types/parts';

type Props = {
  data: partsType[];
};

const Custom: NextPage<Props> = ({ data }) => {
  return (
    <Box w="100%" overflow="scroll">
      <Flex flexWrap="nowrap" w="100vw" overflow="scroll">
        {data.map((item, i) => (
          <Text w="18%">{item.titleJa}</Text>
        ))}
      </Flex>
      <Flex w="fit-content">
        {data.map((item, i) => (
          <Box key={item.titleEn + i} w="100vw">
            <Text>{item.titleJa}</Text>
            <Flex as="ul" flexWrap="wrap" gap="3%">
              {item.type.map((img, i) => (
                <Flex as="li" key={img + i} w="20%" pt="20%" pos="relative">
                  <Box
                    as="img"
                    src={`svg/parts_${item.titleEn}_${img}.svg`}
                    w="100%"
                    h="100%"
                    pos="absolute"
                    inset="0 0 auto auto"
                  />
                </Flex>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Custom;

export const getStaticProps = async () => {
  const response = await fetch(`${partsApi}`);
  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
};
