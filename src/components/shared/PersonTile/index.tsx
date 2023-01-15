import { Stack, Typography } from '@mui/material'
import { STContainer, STAvatarContainer, STInfoContainer } from './styles'
import { SCUserAvatar } from '@/components/shared'
import IPersonTile from './interfaces'

const SCPersonTile = ({ userName, readingLevel, avatar }: IPersonTile) => {
  return (
    <Stack sx={STContainer}>
      <Stack sx={STAvatarContainer}>
        <SCUserAvatar avatar={avatar} size="sm" />
      </Stack>
      <Stack sx={STInfoContainer}>
        <Typography component="p" variant="subtitle1">
          {userName}
        </Typography>
        <Typography color="secondary.dark" component="p" variant="subtitle1">
          {readingLevel}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default SCPersonTile
