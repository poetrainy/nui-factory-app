import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

type Props = {
  data: string;
  path: string;
};

const EditButton: FC<Props> = ({ data, path }) => {
  return (
    <NextLink href={path} passHref>
      <Flex
        as={'span'}
        display={'block'}
        justifyContent={'space-between'}
        alignItems={'center'}
        p={'8px 16px'}
        border={'1px solid #E8E8E8'}
        borderRadius={'4px'}
        fontSize={'1.3rem'}
      >
        {data}
      </Flex>
    </NextLink>
  );
};

export default EditButton;
