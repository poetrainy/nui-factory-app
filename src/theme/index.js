import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary500: '#DD705E',
  primary300: '#F6B7AA',
  secondary500: '#0E536D',
  yellow300: '#FAE06A',
  black900: '#000000',
  black500: '#2B2B2B',
  black300: '#636363',
  black200: '#BCBCBC',
  black100: '#E8E8E8',
  white: '#FFFFFF',
  important: '#ED3434',
};
const styles = {
  global: {
    html: {
      fontSize: '62.5%',
    },
    body: {
      color: 'black500',
      fontSize: '1.4rem',
      fontFamily: 'body',
      a: {
        textDecoration: 'none',
      },
      li: {
        listStyleType: 'none',
      },
    },
  },
};
const fonts = {
  body: "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
};
const breakpoints = {
  sm: '500px',
  md: '640px',
  lg: '820px',
};
const textStyles = {
  pagenation: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '52px',
    height: '52px',
    borderRadius: '9999px',
    transition: '0.2s background',
    svg: {
      width: '40px',
      height: '40px',
      color: 'white',
    },
    '&:hover': {
      background: 'secondary',
    },
  },
  focus: {
    '&:focus': {
      outlineWidth: '3px',
      outlineStyle: 'solid',
      outlineColor: 'primary500',
    },
  },
  hoge: {
    '&::before': {
      content: "''",
      display: 'block',
      width: '100%',
      height: '100%',
      position: 'absolute',
      inset: '0 0 auto auto',
      borderRadius: '16px',
      borderWidth: '5px',
      borderStyle: 'solid',
      borderColor: 'primary500',
    },
  },
};

const theme = extendTheme({
  styles,
  colors,
  fonts,
  textStyles,
  breakpoints,
});

export default theme;
