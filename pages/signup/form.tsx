import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Button from '../../src/components/Button';
import Heading from '../../src/components/Heading';
import Navigation from '../../src/components/Navigation';
import Textarea from '../../src/components/Textarea';

const data: {
  title: string;
  example: string;
}[][] = [
  [
    { title: '姓', example: '田中' },
    { title: '名', example: '明夫' },
  ],
  [
    { title: 'セイ', example: 'タナカ' },
    { title: 'メイ', example: 'アキオ' },
  ],
  [{ title: 'メールアドレス', example: 'example@example.com' }],
  [{ title: '郵便番号', example: '0000000' }],
  [{ title: '都道府県', example: '大阪府' }],
  [{ title: '市区町村', example: '北区中崎西' }],
  [{ title: '番地・マンション・ビル名', example: '2丁目3−35' }],
];

const Form: NextPage = () => {
  return (
    <>
      <Navigation />
      <Box as="section" textStyle="bodyWidth">
        <Heading data="新規会員情報入力" />
        <Box as="form">
          <Flex flexDirection="column" gap="16px">
            {data.map((item) => (
              <Flex w="100%">
                {item.map((input) => (
                  <Textarea title={input.title} example={input.example} />
                ))}
              </Flex>
            ))}
          </Flex>
          <Button data="登録" textIndex={[1]} path="/signup/39" />
        </Box>
      </Box>
    </>
  );
};

export default Form;
