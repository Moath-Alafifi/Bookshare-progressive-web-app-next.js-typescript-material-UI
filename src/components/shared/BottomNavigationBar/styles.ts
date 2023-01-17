export const STAppBar = {
  position: 'fixed',
  top: 'auto',
  bottom: 0,
  height: 80,

  backgroundColor: 'background.paper',
}

export const STTabs = {
  '&  .Mui-selected': {
    opacity: 1,
  },
  '&	.MuiTabs-indicator': {
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',

    '&  > span': {
      width: '50% ',
      backgroundColor: 'primary.main',
    },
  },
}
export const STTab = {
  minWidth: 50,
  p: 0,
  textTransform: 'capitalize',
  justifyContent: 'space-evenly',
  opacity: 0.7,
}
