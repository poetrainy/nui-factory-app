import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  data: string[];
};

const EcCategory: FC<Props> = ({ data }) => (
  <Flex gap="6px" transform="traslateY(-1px)">
    {data.map((item, i) => (
      <Text
        key={item + i + ''}
        w="fit-content"
        color="white"
        bg="secondary500"
        p="3px 12px"
        fontSize="1.1rem"
        fontWeight="bold"
        borderRadius="9999px"
      >
        {item}
      </Text>
    ))}
  </Flex>
);

export default EcCategory;
