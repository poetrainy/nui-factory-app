import { FC } from 'react';
import { Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import OriginalSpacer from './OriginalSpacer';

type Props = {
  data: string;
  back?: string;
};

const Heading: FC<Props> = ({ data, back }) => {
  const router = useRouter();

  const backLink = () => {
    router.back();
  };

  return (
    <>
      {back !== undefined && (
        <>
          <Text
            as="button"
            onClick={() => backLink()}
            color="black200"
            fontSize="1.2rem"
            fontWeight="bold"
          >
            &lt; {back}
          </Text>
          <OriginalSpacer size="2px" />
        </>
      )}
      <Text as="h2" fontSize="2rem" fontWeight="bold">
        {data}
      </Text>
      <OriginalSpacer size="24px" />
    </>
  );
};

export default Heading;
