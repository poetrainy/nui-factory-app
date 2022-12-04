import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Heading from '../src/components/Heading';
import Navigation from '../src/components/Navigation';
import OriginalSpacer from '../src/components/OriginalSpacer';
import { getDay } from '../src/libs/getDay';
import { CouponType } from '../src/types/example';

const coupons: CouponType[] = [
  {
    name: 'ぬいぐるみ1点',
    percent: 10,
    start: { yy: 2021, mm: 0o1, dd: 0o1 },
    end: { yy: 2022, mm: 0o4, dd: 10 },
  },
  {
    name: 'きせかえ1点',
    percent: 10,
    start: { yy: 2022, mm: 0o1, dd: 0o1 },
    end: { yy: 2023, mm: 0o4, dd: 10 },
  },
];

const Coupon: NextPage = () => {
  const today = getDay();

  return (
    <>
      <Navigation />
      <Box as="section" textStyle="bodyWidth">
        <Heading data="クーポン一覧" />
        <Flex as="ul" flexDirection="column" gap="20px" p="0 2vw">
          {coupons.map((item: CouponType, i: number) => (
            <Box
              as="li"
              key={item.name + i}
              sx={{
                '&::after': {
                  content: "''",
                  display: 'block',
                  width: '100%',
                  height: '1px',
                  background: 'black200',
                  margin: '12px 0 0',
                },
              }}
            >
              <Flex alignItems="center" gap="8px" fontSize="1.2rem">
                <Box
                  bg="primary500"
                  p="4px 16px"
                  borderRadius="9999px"
                  fontWeight="bold"
                >
                  {(today.yy > item.start.yy ||
                    (today.yy === item.start.yy && today.mm > item.start.mm) ||
                    (today.yy === item.start.yy &&
                      today.mm === item.start.mm &&
                      today.dd >= item.start.dd)) &&
                  (today.yy < item.end.yy ||
                    (today.yy === item.end.yy && today.mm < item.end.mm) ||
                    (today.yy === item.end.yy &&
                      today.mm === item.end.mm &&
                      today.dd <= item.end.dd))
                    ? '利用可'
                    : '利用不可'}
                </Box>
                <Text>
                  <Text
                    as="span"
                    sx={{
                      '&::after': {
                        content: "'/'",
                      },
                    }}
                  >
                    {item.start.yy}
                  </Text>
                  <Text
                    as="span"
                    sx={{
                      '&::after': {
                        content: "'/'",
                      },
                    }}
                  >
                    {item.start.mm}
                  </Text>
                  <Text
                    as="span"
                    sx={{
                      '&::after': {
                        content: "'〜'",
                      },
                    }}
                  >
                    {item.start.dd}
                  </Text>
                  <Text
                    as="span"
                    sx={{
                      '&::after': {
                        content: "'/'",
                      },
                    }}
                  >
                    {item.end.yy}
                  </Text>
                  <Text
                    as="span"
                    sx={{
                      '&::after': {
                        content: "'/'",
                      },
                    }}
                  >
                    {item.end.mm}
                  </Text>
                  <Text as="span">{item.end.dd}</Text>
                </Text>
              </Flex>
              <OriginalSpacer size="16px" />
              <Text fontWeight="bold">{item.name}</Text>
              <Text color="important" fontWeight="bold">
                <Text as="span" fontSize="3rem">
                  {item.percent}
                </Text>
                <Text as="span" fontSize="2rem">
                  %OFF
                </Text>
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Coupon;
