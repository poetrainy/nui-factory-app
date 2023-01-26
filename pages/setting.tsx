import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Content from 'src/components/Content';
import EditButton from 'src/components/EditButton';
import { userApi } from 'src/libs/user';
import { userType } from 'src/types/user';

const Setting: NextPage = () => {
  const data: userType = userApi[0];
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

  const Component = () => (
    <Flex as={'ul'} flexDirection={'column'} gap={'32px'}>
      {userData.map((item, i) => (
        <Flex
          as={'li'}
          key={item.heading + i}
          flexDirection={'column'}
          gap={'12px'}
          fontSize={'1.3rem'}
        >
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Text fontWeight={'bold'}>{item.heading}</Text>
            <EditButton data={'修正'} path={'/'} />
          </Flex>
          <Box>{item.text}</Box>
        </Flex>
      ))}
    </Flex>
  );

  return <Content head={'ユーザー情報'} component={<Component />} />;
};

export default Setting;
