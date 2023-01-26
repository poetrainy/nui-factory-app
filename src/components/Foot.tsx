import { FC } from 'react';
import { Center, Flex, Text } from '@chakra-ui/react';

const Foot: FC = () => {
  const footLinkArray: string[] = ['会社概要', '個人情報保護方針', '運営会社'];

  return (
    <Center
      as="footer"
      flexDirection="column"
      gap="8px"
      w="90vw"
      fontSize="1.2rem"
      m="auto"
      pt="24px"
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
    </Center>
  );
};

export default Foot;
