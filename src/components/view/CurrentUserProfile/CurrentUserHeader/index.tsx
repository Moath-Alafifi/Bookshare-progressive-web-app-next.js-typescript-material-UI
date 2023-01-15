import { Box } from '@mui/material'
import {
  SCCurrentUserAvatar,
  SCUserCredits,
  SCSvgIcons,
} from '@/components/shared'
import { STContainer, STCredits, STSettingIcon } from './styles'
import ICurrentUserHeader from './interfaces'
import { Setting } from '@/constants'

const CurrentUserHeader = ({ creditsNum, avatar }: ICurrentUserHeader) => {
  return (
    <Box sx={STContainer}>
      <Box sx={STCredits}>
        <SCUserCredits creditsNum={creditsNum} />
      </Box>
      <Box sx={STSettingIcon}>
        <SCSvgIcons icon={Setting}   />
      </Box>
      <SCCurrentUserAvatar avatar={avatar} />
    </Box>
  )
}

export default CurrentUserHeader
