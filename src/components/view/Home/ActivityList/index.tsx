import { Stack, Typography } from '@mui/material'
import { STContainer, STInfoContainer, STActivityText } from './styles'
import { SCUserAvatar } from '@/components/shared'
import IActivityList from './interfaces'

const ActivityList = ({ userName, activity, time, avatar }: IActivityList) => {
  const firstName = userName.replace(/\ .*/, '')
  return (
    <Stack sx={STContainer}>
      <SCUserAvatar avatar={avatar} size="sm" />
      <Stack sx={STInfoContainer}>
        <Typography component="p" variant="subtitle1">
          {firstName}
        </Typography>
        <Typography component="p" variant="subtitle2" sx={STActivityText}>
          {activity}
        </Typography>
      </Stack>
      <Typography component="p" variant="subtitle2" color="text.secondary">
        {time}
      </Typography>
    </Stack>
  )
}

export default ActivityList
