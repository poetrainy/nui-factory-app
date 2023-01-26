import { Flex, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { category } from 'src/libs/category';

type Props = {
  data: string;
};

const EcCategoryText: FC<Props> = ({ data }) => {
  const [categoryText, setCategoryText] = useState<string>();
  useEffect(() => {
    let categoryTextKeep: any = category.filter(
      (item, i) => item.path === data
    );
    setCategoryText(categoryTextKeep[0].heading);
  }, []);

  return (
    <Flex gap={'6px'} transform={'traslateY(-1px)'}>
      <Text
        w={'fit-content'}
        color={'white'}
        bg={'secondary500'}
        p={'3px 12px'}
        fontSize={'1.1rem'}
        fontWeight={'bold'}
        borderRadius={'9999px'}
      >
        {categoryText}
      </Text>
    </Flex>
  );
};

export default EcCategoryText;
