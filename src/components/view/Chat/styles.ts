export const STTime = {
  marginLeft: 'auto',
  alignSelf: 'flex-start',
  justifySelf: 'flex-end',
  color: 'primary.main',
}

export const STTitle = {
  mb: 4,
  color: 'primary.main',
}
export const STContainer = {
  flexDirection: 'row',
  alignItems: 'center',
  margin: '16px 0px 16px 0px',
  gap: 1,
}

export const STInviteFriend = {
  flexDirection: 'row',
  alignItems: 'center',
  textAlign: 'center',
  width: 270,
  backgroundColor: 'primary.light',
  borderRadius: 2,
  height: 50,
  mt:10
}
export const STInActiveBadge = {
  '& .MuiBadge-badge': {
    backgroundColor: '#707070',
    color: '#707070',
    boxShadow: `0 0 0 2px #fff`,
  },
}
export const STActiveBadge = {
  '& .MuiBadge-badge': {
    backgroundColor: '#0288d1',
    color: '#0288d1',
    boxShadow: `0 0 0 2px #fff`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}
