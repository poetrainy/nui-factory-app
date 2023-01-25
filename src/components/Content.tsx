import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import Navigation from './Navigation';
import Heading from './Heading';
import OriginalSpacer from './OriginalSpacer';
import Foot from './Foot';

type Props = {
  head?: string;
  back?: string;
  component: JSX.Element;
  index?: boolean;
  isFoot?: boolean;
};

const Content: FC<Props> = ({ head, back, component, index, isFoot }) => {
  return (
    <>
      <Navigation />
      <OriginalSpacer size="32px" />
      <Box
        as="main"
        m="auto"
        sx={{
          ...(index
            ? {
                width: '100vw',
              }
            : {
                width: '90vw',
              }),
        }}
      >
        {head && <Heading data={head} back={back} />}
        {component}
      </Box>
      {isFoot && (
        <>
          <OriginalSpacer size="40px" />
          <Foot />
          <OriginalSpacer size="40px" />
        </>
      )}
    </>
  );
};

export default Content;
