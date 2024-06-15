import { createTheme } from '@mui/material';
import '@fontsource/inter';
import React from 'react';

type Colors = {
  typography: {
    grey: string;
    white: string;
    grey2: string;
    grey3: string;
  };
  border: {
    grey: string;
    grey2: string;
  };
  button: {
    blue: string;
  };
  background: {
    grey: string;
    black: string;
    black2: string;
  };
};

declare module '@mui/material/styles' {
  interface Theme {
    colors: Colors;
  }
  interface ThemeOptions {
    colors: Colors;
  }
  interface TypographyVariants {
    font1: React.CSSProperties;
    font2: React.CSSProperties;
    font3: React.CSSProperties;
    font4: React.CSSProperties;
    font5: React.CSSProperties;
    font6: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    font1: React.CSSProperties;
    font2: React.CSSProperties;
    font3: React.CSSProperties;
    font4: React.CSSProperties;
    font5: React.CSSProperties;
    font6: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    font1: true;
    font2: true;
    font3: true;
    font4: true;
    font5: true;
    font6: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: 'Inter',
    font1: { fontSize: 14, fontWeight: 500 },
    font2: { fontSize: 18, fontWeight: 600 },
    font3: { fontSize: 16, fontWeight: 500 },
    font4: { fontSize: 18, fontWeight: 500 },
    font5: { fontSize: 16, fontWeight: 400, lineHeight: '24px' },
    font6: { fontSize: 28, fontWeight: 500, lineHeight: '34px' },
  },
  colors: {
    typography: {
      grey: '#6B6C70',
      white: '#FFFFFF',
      grey2: '#7F8084',
      grey3: '#C5C7CA',
    },
    border: {
      grey: '#7F8084',
      grey2: '#35373B',
    },
    button: {
      blue: '#4A96FF',
    },
    background: {
      grey: '#27292D',
      black: '#191920',
      black2: '#131319',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.colors.border.grey,
            borderWidth: '1.5px',
          },
          '&:hover > .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.colors.border.grey,
            borderWidth: '1.5px',
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover, &.Mui-focusVisible': {
            backgroundColor: theme.colors.button.blue,
          },
        }),
      },
    },
  },
});
