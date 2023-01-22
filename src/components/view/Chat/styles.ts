export const STTime = {
  marginLeft: 'auto',
  alignSelf: 'flex-start',
  justifySelf: 'flex-end',
  color: 'text.hint',
}

export const STTitle = {
  mb: 4,
}
export const STContainer = {
  alignItems: 'center',
  margin: '16px 0px 16px 0px',
  gap: 1,
}

export const STInviteFriend = {
  alignItems: 'center',
  textAlign: 'center',
  width: 270,
  backgroundColor: 'background.paper',
  borderRadius: 2,
  height: 50,
  mt: 10,
}
export const STInActiveBadge = {
  '& .MuiBadge-badge': {
    backgroundColor: 'primary.main',
    color: 'primary.main',
    boxShadow: `0 0 0 2px #fff`,
  },
}
export const STActiveBadge = {
  '& .MuiBadge-badge': {
    backgroundColor: 'primary.main',
    color: 'primary.main',
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
export const STMessageText = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  color: 'text.secondary',
}
