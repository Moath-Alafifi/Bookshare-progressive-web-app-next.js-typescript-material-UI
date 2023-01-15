import { Stack, Typography } from '@mui/material'
import { STbookName, STOwner, STOwnerContainer } from './styles'
import {
  UserAvatar,
  SCButton,
  UserLocation,
  SCSvgIcons,
} from '@/components/shared'
import IOwnersData from '../interfaces'
import { Chat } from '@/constants'

const OneBookOwner = ({ ownersData }: IOwnersData) => {
  return (
    <>
      {ownersData.map((owner) => (
        <Stack key={owner.id} sx={STOwnerContainer}>
          <UserAvatar avatar={owner.avatar} size="md" />
          <Typography component="p" variant="body1">
            Owned by
            <Typography sx={STOwner} component="span" variant="body1">
              {owner.owner}
            </Typography>
          </Typography>
          <UserLocation userLocation={owner.distance} />
          <Typography component="p" variant="subtitle2" sx={STbookName}>
            {owner.bookDescription}
          </Typography>
          <SCButton
            text="Chat to Swap or Exchange"
            buttonSize='xl'
            startIcon={<SCSvgIcons icon={Chat} color="inherit" />}
          />
        </Stack>
      ))}
    </>
  )
}

export default OneBookOwner
