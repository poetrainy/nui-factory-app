import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import OriginalSpacer from './OriginalSpacer';

const Foot: FC = () => {
  const footLinkArray: string[] = ['会社概要', '個人情報保護方針', '運営会社'];

  return (
    <Flex
      as="footer"
      alignItems="center"
      flexDirection="column"
      gap="12px"
      w="fit-content"
      fontSize="1.2rem"
      m="auto"
      borderTopColor="black100"
      borderTopWidth="1px"
      borderTopStyle="solid"
    >
      <Flex gap="8px">
        {footLinkArray.map((item: string, i: number) => (
          <Text key={item + i}>{item}</Text>
        ))}
      </Flex>
      <Text as="small" w="fit-content">
        &copy; 2022-2023 nui-factory
      </Text>
    </Flex>
  );
};

export default Foot;
