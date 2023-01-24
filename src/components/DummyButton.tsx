import { Center } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  data: string;
  inline?: boolean;
  fixed?: boolean;
};

const DummyButton: FC<Props> = ({ data, inline, fixed }) => {
  return (
    <Center
      h="56px"
      color="white"
      bg="primary500"
      fontSize="1.6rem"
      fontWeight="bold"
      borderRadius="9999px"
      opacity="1"
      transition="opacity 0.2s"
      _hover={{
        opacity: '0.7',
        cursor: 'pointer',
      }}
      sx={{
        ...(fixed && {
          position: 'fixed',
          inset: 'auto auto 40px auto',
          ...(!inline && {
            width: '90vw',
            maxWidth: '400px',
          }),
        }),
        ...(!fixed && {
          ...(inline
            ? {
                width: 'fit-content',
                padding: '0 56px',
              }
            : {
                width: '100%',
                maxWidth: '400px',
              }),
        }),
      }}
    >
      {data}
    </Center>
  );
};

export default DummyButton;
