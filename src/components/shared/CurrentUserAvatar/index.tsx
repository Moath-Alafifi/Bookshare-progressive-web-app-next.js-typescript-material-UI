import { Box } from '@mui/material'
import UserAvatar from '../UserAvatar'
import IAvatar from './interfaces'
import { STContainer } from './styles'

const SCCurrentUserAvatar = ({ avatar}: IAvatar) => {
  return (
    <Box sx={STContainer}>
      <UserAvatar  size='xxl' avatar={avatar} />
    </Box>
  )
}

export default SCCurrentUserAvatar
 