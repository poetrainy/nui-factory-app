import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import EditButton from '../src/components/EditButton';
import Heading from '../src/components/Heading';
import Navigation from '../src/components/Navigation';
import { userApi } from '../src/libs/api';
import { userType } from '../src/types/user';

type Props = {
  data: userType;
};

const Setting: NextPage<Props> = ({ data }) => {
  const userData: { heading: string; text: string }[] = [
    {
      heading: '姓・名',
      text: `${data.name.last.kanji} ${data.name.first.kanji}(${data.name.last.furigana} ${data.name.first.furigana})`,
    },
    {
      heading: '電話番号',
      text: `${data.phone[0]}-${data.phone[1]}-${data.phone[2]}`,
    },
    {
      heading: 'メールアドレス',
      text: `${data.email}`,
    },
    {
      heading: '住所',
      text: `〒${data.address.postCode[0]}-${data.address.postCode[0]}
${data.address.text}`,
    },
  ];

  return (
    <>
      <Navigation />
      <Box as="section" textStyle="bodyWidth">
        <Heading data="ユーザー情報" />
        <Flex as="ul" flexDirection="column" gap="32px">
          {userData.map((item, i) => (
            <Flex
              as="li"
              key={item.heading + i}
              flexDirection="column"
              gap="12px"
              fontSize="1.3rem"
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontWeight="bold">{item.heading}</Text>
                <EditButton data="修正" path="/" />
              </Flex>
              <Box>{item.text}</Box>
            </Flex>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Setting;

export const getStaticProps = async () => {
  const response = await fetch(`${userApi}`);
  const data = await response.json();

  return {
    props: {
      data: data[0],
    },
  };
};
