import { Stack, Box, Typography } from '@mui/material'
import IMyCreditsBody from '../interfaces'
import { Diamond } from '@/constants'
import {
  STContainer,
  STChip,
  STInfoContainer,
  STSvgIconContainer,
} from './styles'
import { LeftRightArrow, LeftArrow, RightArrow } from '@/constants'
import { SCChip, SCSvgIcons } from '@/components/shared'

const MyCreditsItemList = ({
  date,
  title,
  verb,
  creditsNum,
}: IMyCreditsBody) => {
  return (
    <Stack sx={STContainer}>
      <Box sx={STSvgIconContainer}>
        <SCSvgIcons
          icon={
            verb === 'swapped'
              ? LeftRightArrow
              : verb === 'gave'
              ? LeftArrow
              : RightArrow
          }
        />
      </Box>
      <Stack sx={STInfoContainer}>
        <Typography component="p" variant="subtitle2">
          {title}
        </Typography>
        <Typography component="p" variant="subtitle2">
          {date}
        </Typography>
      </Stack>
      <SCChip icon={Diamond} label={creditsNum} styles={STChip} />
    </Stack>
  )
}

export default MyCreditsItemList
