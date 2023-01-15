import { Stack, Typography, Box } from '@mui/material'
import { useTranslation } from 'next-i18next'
import IUserActivityStatus from './interfaces'
import { STContainer } from './styles'

const SCUserActivityStatus = ({
  booksNum,
  followersNum,
  followingNum,
}: IUserActivityStatus) => {
  const { t } = useTranslation('common')
  return (
    <Stack sx={STContainer}>
      <Box>
        <Typography component="p" variant="subtitle1">
          {booksNum}
        </Typography>
        <Typography component="p" variant="subtitle2">
          {t('books')}
        </Typography>
      </Box>
      <Box>
        <Typography component="p" variant="subtitle1">
          {followersNum}
        </Typography>
        <Typography component="p" variant="subtitle2">
          {t('followers')}
        </Typography>
      </Box>

      <Box>
        <Typography component="p" variant="subtitle1">
          {followingNum}
        </Typography>
        <Typography component="p" variant="subtitle2">
          {t('following')}
        </Typography>
      </Box>
    </Stack>
  )
}

export default SCUserActivityStatus
