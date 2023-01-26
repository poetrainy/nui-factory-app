import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import Navigation from './Navigation';
import Heading from './Heading';
import OriginalSpacer from './OriginalSpacer';
import Foot from './Foot';

type Props = {
  head?: string;
  back?: string;
  backPath?: string;
  component: JSX.Element;
  index?: boolean;
  isFoot?: boolean;
};

const Content: FC<Props> = ({
  head,
  back,
  backPath,
  component,
  index,
  isFoot,
}) => {
  return (
    <>
      <Navigation />
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
        {head && (
          <>
            <OriginalSpacer size="32px" />
            <Heading data={head} back={back} backPath={backPath} />
            <OriginalSpacer size="24px" />
          </>
        )}
        {component}
      </Box>
      {isFoot && (
        <>
          <OriginalSpacer size="48px" />
          <Foot />
          <OriginalSpacer size="40px" />
        </>
      )}
    </>
  );
};

export default Content;
