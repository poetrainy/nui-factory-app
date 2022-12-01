import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

type Props = {
  title: string;
  example: string;
};

const Heading: FC<Props> = ({ title, example }) => {
  return (
    <Box as="label" display="flex" flexDirection="column" gap="8px">
      <Text as="h3" fontSize="1.3rem">
        {title}
      </Text>
      <Flex
        as="input"
        type="text"
        placeholder={example}
        h="48px"
        bg="black100"
        p="0 16px"
        borderRadius="9999px"
        fontSize="1.6rem"
        textStyle="focus"
      />
    </Box>
  );
};

export default Heading;
