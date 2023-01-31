import { Menu } from '@/constants'
import { Stack, Typography, Box } from '@mui/material'
import { SCBackButton, SCButton, SCSvgIcons } from '@/components/shared'
import IStandardHeader from './interfaces'
import { STContainer, STBackButton, STLeftIcon } from './styles'

const SCStandardHeader = ({
  isLeftIconHidden,
  isMenuIconHidden,
  headerText,
}: IStandardHeader) => {
  return (
    <Stack sx={STContainer}>
      <Box sx={STBackButton}>
        <SCBackButton />
      </Box>
      <Typography component="p" variant="h4">
        {headerText}
      </Typography>
      {!isLeftIconHidden && (
        <Box sx={STLeftIcon}>
          {!isMenuIconHidden ? (
            <SCSvgIcons icon={Menu} color="disabled" />
          ) : (
            <SCButton buttonSize="xs" text="clear All" variant="text" />
          )}
        </Box>
      )}
    </Stack>
  )
}

export default SCStandardHeader
