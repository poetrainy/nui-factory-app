import { Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { category } from '../../../src/libs/category';

type Props = {
  category: string;
};

const CategoryTop: NextPage<Props> = ({ category }) => {
  return <Text>{category}</Text>;
};

export default CategoryTop;

export const getStaticPaths = () => {
  const paths = category.map((item) => ({ params: { category: item } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { category: string };
}) => {
  console.log(params.category);

  // const microCMSData = await client.get({
  //   endpoint: "schedule",
  //   queries: {
  //     offset: 0,
  //     limit: 100,
  //   },
  // });
  // // スケジュール全て
  // let schedule: Schedule[] = microCMSData.contents.reverse();
  // // 日曜日の日付の配列
  // let getSunday: number[] = [3, 10, 17, 24];
  // // 1週間分の予定を入れる予定の配列
  // let getSundayData = [];

  // let week = Number(params.id) - 1;

  // for (let i = 0; i < schedule.length; i++) {
  //   let hoge = Number(schedule[i].id.split("-")[0]);
  //   if (week === 3) {
  //     if (hoge >= getSunday[week]) {
  //       getSundayData.push(schedule[i]);
  //     }
  //   } else {
  //     if (hoge >= getSunday[week] && hoge < getSunday[week + 1]) {
  //       getSundayData.push(schedule[i]);
  //     }
  //   }
  // }

  // let streamingTitle: string[] = [];
  // let hoge = 0;

  // if (Number(params.id) === 4) {
  //   hoge = getSundayData.length - 1;
  // } else {
  //   hoge = getSundayData.length;
  // }
  // for (let i = 0; i < hoge; i++) {
  //   const getItem = await axios.get(getSundayData[i].url);
  //   const item = getItem.data;
  //   const streamingTitleItem = item
  //     .split("<title>")[1]
  //     .split(" - YouTube</title>")[0];
  //   streamingTitle.push(streamingTitleItem);
  // }

  return {
    props: {
      category: params.category,
    },
  };
};
