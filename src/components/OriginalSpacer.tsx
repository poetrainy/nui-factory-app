import { Box } from '@chakra-ui/react';
import { FC } from 'react';

type OriginalSpacerProps = {
  size: string;
  horizontal?: boolean;
};

const OriginalSpacer: FC<OriginalSpacerProps> = ({ size, horizontal }) => (
  <Box
    sx={{
      ...(horizontal
        ? {
            width: size,
            height: 'auto',
          }
        : {
            width: 'auto',
            height: size,
          }),
    }}
  />
);

export default OriginalSpacer;
