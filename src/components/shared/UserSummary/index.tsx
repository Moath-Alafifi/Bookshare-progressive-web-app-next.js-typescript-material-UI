import { Typography, Stack } from '@mui/material'
import {
  SCUserBio,
  SCUserLocation,
  SCUserReadingLevel,
  SCUserActivityStatus,
} from '@/components/shared'
import IUserSummary from './interfaces'
import { STContainer } from './styles'

const SCUserSummary = ({
  userName,
  userLocation,
  userReadingLevel,
  booksNum,
  followersNum,
  followingNum,
  userBio,
}: IUserSummary) => {
  return (
    <Stack sx={STContainer}>
      <Typography component="p" variant="h2">
        {userName}
      </Typography>
      <SCUserLocation userLocation={userLocation} />
      <SCUserReadingLevel userReadingLevel={userReadingLevel} />
      <SCUserActivityStatus
        booksNum={booksNum}
        followersNum={followersNum}
        followingNum={followingNum}
      />
      <SCUserBio userBio={userBio} />
    </Stack>
  )
}

export default SCUserSummary
