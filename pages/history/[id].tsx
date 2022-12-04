// import { Box } from '@chakra-ui/react';
// import type { NextPage } from 'next';
// import Heading from '../../src/components/Heading';
// import Navigation from '../../src/components/Navigation';
// import { goodsApi, orderApi } from '../../src/libs/api';
// import { historyType } from '../../src/types/example';
// import { goodsType } from '../../src/types/goods';

// type Props = {
//   id: string;
// };

// const historyDate: NextPage<Props> = ({ id }) => {
//   return (
//     <>
//       <Navigation />
//       <Box as="section" textStyle="bodyWidth">
//         <Heading data="ああああ" back="注文履歴" />
//         {id}
//       </Box>
//     </>
//   );
// };

// export default historyDate;

// export const getStaticPaths = async () => {
//   const response = await fetch(`${orderApi}`);
//   const data = await response.json();
//   const paths = data.map((item: historyType) => ({ params: { id: item.id } }));

//   console.log(data);
//   return {
//     paths,
//     fallback: false,
//   };
// };
