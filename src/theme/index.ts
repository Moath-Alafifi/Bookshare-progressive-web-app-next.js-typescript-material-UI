import { PaletteMode } from '@mui/material'
import COLORS from './colors'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color']
    }
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    status: true
  }
}
interface IMode {}
export const themeOptions = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            light: '#DDDDDD',
            main: '#000',
            dark: '#29434e',
          },
          status: {
            light: '#CCCCCC',
            main: '#707070',
            dark: '#63676B',
            danger: '#000',
          },
          secondary: {
            light: COLORS.whiteSmoke,
            main: '#fafafa',
            dark: '#63676B',
          },
          background: {
            default: '#F0F2F5',
          },
          disabled: {
            main: '#64748B',
          },
          neutral: {
            main: '#64748B',
            contrastText: '#fff',
          },
        }
      : {
          primary: {
            light: '#a9a5a5 ',
            main: '#fff',
            dark: '#fff ',
          },
          status: {
            main: '#707070',
            light: '#CCCCCC',
            dark: '#63676B',
            danger: '#fff',
          },
          secondary: {
            light: COLORS.veryDarkGray,
            main: '#242526',
            dark: '#808e95',
          },
          background: {
            default: '#18191A',
          },
          disabled: {
            main: '#64748B',
          },
          neutral: {
            main: '#64748B',
            contrastText: '#fff',
          },
        }),
  },
  typography: {
    fontFamily: ['Avenir', 'Arial', 'sans-serif'].join(','),
    htmlFontSize: 16,
    fontSize: 14,
    h1: {
      fontSize: '1.5rem', // 24px
      fontWeight: 900,
      lineHeight: 1.3,
    },
    h2: {
      fontSize: '1.5rem', // 24px
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.125rem', // 18px
      fontWeight: 900,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.125rem', // 18px
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h5: {
      fontSize: '1rem', // 16px
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h6: {
      fontSize: '0.9375rem', // 15px
      fontWeight: 900,
      lineHeight: 1.3,
    },
    subtitle1: {
      fontSize: '0.875rem', // 14px
      lineHeight: 1.3,
    },
    subtitle2: {
      fontSize: '0.75rem', // 12px
      lineHeight: 1.3,
    },
    body1: {
      fontSize: '1rem', // 16px
      lineHeight: 1.3,
    },
    body2: {
      fontSize: '0.875rem', // 14px
      lineHeight: 1.3,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none' as 'none',
        },
      },
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
        variant: 'contained' as 'contained',
        color: 'info' as 'info',
      },
    },
    MuiStack: {
      defaultProps: {
        direction: 'row' as 'row',
      },
    },
  },
})
