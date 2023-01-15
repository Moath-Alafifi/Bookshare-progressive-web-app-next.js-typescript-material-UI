export const STAppBar = {
  position: 'fixed',
  top: 'auto',
  bottom: 0,
  height: 80,
  color: '#fff',
}

export const STTabs = {
  '&  .Mui-selected': {
    color: 'primary.dark',
    opacity: 1,
  },
  '&	.MuiTabs-indicator': {
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    color: 'primary',

    '&  > span': {
      width: '50% ',
      backgroundColor: 'primary.dark',
    },
  },
}
export const STTab = {
  textTransform: 'capitalize',
  justifyContent: 'space-evenly',
  color: 'primary.dark',
  opacity: 0.7,
}
