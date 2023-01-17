import { Stack, Typography } from '@mui/material'
import { STContainer, STAvatarContainer, STInfoContainer } from './styles'
import { SCUserAvatar } from '@/components/shared'
import IPersonTile from './interfaces'

const FollowedActivityBody = ({ userName, date, avatar }: IPersonTile) => {
  return (
    <Stack sx={STContainer}>
      <Stack sx={STAvatarContainer}>
        <SCUserAvatar avatar={avatar} size="sm" />
      </Stack>
      <Stack sx={STInfoContainer}>
        <Typography component="p" color="text.secondary" variant="subtitle2">
          {date} 
        </Typography>
        <Typography component="p" variant="subtitle1">
          {userName} Just followed you 
        </Typography>
      </Stack>
    </Stack>
  )
}

export default FollowedActivityBody
