import { FC } from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import OriginalSpacer from './OriginalSpacer';

type Props = {
  data?: string;
};

const test = [1, 2, 3];

const Card: FC<Props> = ({ data }) => {
  return (
    <Flex as="ul" flexWrap="wrap" gap="24px 16px">
      {test.map((item) => (
        <Flex
          flexDirection="column"
          as="li"
          w="calc((100% - 16px)/2)"
          key={item}
        >
          <Flex w="100%" pt="100%" pos="relative" bg="black100">
            {/* <Box as="img" src={} w="100%" h="100%" objectFit="cover"/> */}
          </Flex>
          <OriginalSpacer size="12px" />
          <Text fontSize="1.2rem">
            <Text as="span">最終更新:</Text>
            <Text as="span">1日</Text>
            <Text as="span">前</Text>
          </Text>
          {/* <OriginalSpacer size="4px" /> */}
          <Text as="h3" fontSize="1.8rem" fontWeight="bold">
            タイトル
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default Card;
