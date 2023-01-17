import { Stack, Typography } from '@mui/material'
import { STContainer, STInfoContainer } from './styles'
import { SCUserAvatar } from '@/components/shared'
import IPersonTile from './interfaces'

const SCPersonTile = ({ userName, readingLevel, avatar }: IPersonTile) => {
  return (
    <Stack sx={STContainer}>
      <SCUserAvatar avatar={avatar} size="sm" />
      <Stack sx={STInfoContainer}>
        <Typography component="p" variant="subtitle1">
          {userName}
        </Typography>
        <Typography component="p" color="text.secondary" variant="subtitle1">
          {readingLevel}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default SCPersonTile
