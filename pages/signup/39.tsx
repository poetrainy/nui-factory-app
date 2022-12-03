import { Box, Flex, Text } from '@chakra-ui/react';
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

const thankYou: NextPage = () => {
  return (
    <>
      <Navigation />
      <Box as="section" textStyle="bodyWidth">
        <Heading data="新規会員登録完了" />
        <Text>
          ご登録ありがとうございます。
          <br />
          引き続きぬいふぁく！でお買い物を楽しみましょう！
        </Text>
        <Button data="トップに戻る" textIndex={[]} path="/" />
      </Box>
    </>
  );
};

export default thankYou;
