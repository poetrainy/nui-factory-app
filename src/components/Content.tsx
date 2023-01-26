import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import Navigation from 'src/components/Navigation';
import Heading from 'src/components/Heading';
import OriginalSpacer from 'src/components/OriginalSpacer';
import Foot from 'src/components/Foot';

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
        as={'main'}
        m={'auto'}
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
            <OriginalSpacer size={'32px'} />
            <Heading data={head} back={back} backPath={backPath} />
            <OriginalSpacer size={'24px'} />
          </>
        )}
        {component}
      </Box>
      {isFoot && (
        <>
          <OriginalSpacer size={'48px'} />
          <Foot />
          <OriginalSpacer size={'40px'} />
        </>
      )}
    </>
  );
};

export default Content;
