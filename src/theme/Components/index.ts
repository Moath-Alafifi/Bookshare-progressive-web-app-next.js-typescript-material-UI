export const Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none' as const,
      },
    },
    defaultProps: {
      disableRipple: true,
      variant: 'contained' as const,
    },
  },
  MuiStack: {
    defaultProps: {
      direction: 'row' as const,
    },
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        textTransform: 'none' as const,
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none' as const,
      },
    },
  },
}
