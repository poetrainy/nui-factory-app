import { Box, Center } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  data: string;
  inline?: boolean;
  fixed?: boolean;
  fav?: boolean;
};

const DummyButton: FC<Props> = ({ data, inline, fixed, fav }) => {
  return (
    <Center
      gap="16px"
      sx={{
        ...(fixed && {
          position: 'fixed',
          inset: 'auto auto 40px 5vw',
          ...(!inline && {
            width: '90vw',
            maxWidth: '400px',
          }),
        }),
      }}
    >
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
          // ...(!fixed && {
          ...(inline
            ? {
                width: 'fit-content',
                padding: '0 56px',
              }
            : {
                width: '100%',
                maxWidth: '400px',
              }),
          // }),
        }}
      >
        {data}
      </Center>
      {fav && (
        <Center
          w="56px"
          h="56px"
          borderRadius="9999px"
          sx={{
            '>svg': {
              '>fill': {
                path: 'primary500',
              },
            },
          }}
        >
          <Box as="img" src="img/icon_fav.svg" />
        </Center>
      )}
    </Center>
  );
};

export default DummyButton;
