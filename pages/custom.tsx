import type { NextPage } from 'next';
import { partsApi } from '../src/libs/api';
import { partsType } from '../src/types/parts';

type Props = {
  data: partsType[];
};

const Custom: NextPage<Props> = ({ data }) => {
  return (<>{data[0].titleJa}</>);
};

export default Custom;

export const getStaticProps = async () => {
  const response = await fetch(`${partsApi}`);
  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
};
