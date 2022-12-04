import { Box, Flex } from '@chakra-ui/react';
import { FC, useRef, useState } from 'react';
import type { NextPage } from 'next';
import Heading from './Heading';
import Textarea from './Textarea';
import Button from './Button';
import Navigation from './Navigation';
import OriginalSpacer from './OriginalSpacer';

const smsForm = [0, 1, 2, 3];

const Sms: FC = () => {
  const ref = useRef(null);
  const [elIndex, setElIndex] = useState<number>();

  const keyDownFunc = (e: any) => {
    e.target.value = e.target.value.replace(/[^0-9]+/i, '');
    if (e.target.value !== '') {
      setElIndex(Number(e.currentTarget.dataset.number));
      // console.log(e.currentTarget.dataset.number);
      // if (window !== undefined) {
      // console.log(ref);
      // if (window.document.getElementById('test') !== null) {
      //   console.log(window.document.getElementById('test'));
      // }

      // console.log(window.document.body.dataset.number);
      // `${setElIndex + 1}`
      // }
    }
  };

  return (
    <Flex justifyContent="space-around" ref={ref} id="test">
      {smsForm.map((item, i) => (
        <Flex
          as="input"
          type="text"
          placeholder="0"
          maxLength={1}
          data-number={i}
          key={item}
          justifyContent="center"
          w="5.4rem"
          h="80px"
          p="0 1rem"
          borderBottomWidth="3px"
          borderBottomStyle="solid"
          borderBottomColor="black200"
          fontSize="5rem"
          onKeyUp={keyDownFunc}
          // ref={refEl + i}
          sx={{
            '&:focus': {
              borderBottomWidth: '3px',
              borderBottomStyle: 'solid',
              borderBottomColor: 'primary500',
              outline: 'none',
            },
          }}
        />
      ))}
    </Flex>
  );
};

export default Sms;
