import { Box, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { partsApi } from '../src/libs/api';
import { partsType } from '../src/types/parts';

type Props = {
  data: partsType[];
};

const Custom: NextPage<Props> = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <Box key={item.titleEn + i}>
          <Text>{item.titleJa}</Text>
          {item.type.map((img, i) => (
            <Box
              as="img"
              key={img + i}
              src={`svg/parts_${item.titleEn}_${img}.svg`}
            />
          ))}
        </Box>
      ))}
    </>
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
