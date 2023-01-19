import { Stack, Typography, Button } from '@mui/material'
import {
  UserAvatar,
  SCSvgIcons,
  UserCredits,
  UserLocation,
  SCDivider,
} from '@/components/shared'
import { Arrow, IMAGES } from '@/constants'
import IOwnersData from '../interfaces'
import React from 'react'
import {
  STButton,
  STOwner,
  STContainer,
  STOwnersInfoContainer,
  STOwnersText,
} from './styles'

const MultiBookOwners = ({ ownersData }: IOwnersData) => {
  return (
    <>
      <Stack sx={STOwnersText}>
        <Typography component="p" variant="subtitle1">
          Owners
        </Typography>
      </Stack>
      {ownersData.map((owner) => (
        <React.Fragment key={owner.id}>
          <Stack sx={STContainer}>
            <UserAvatar avatar={owner.avatar} size="xxl" />
            <Stack sx={STOwnersInfoContainer}>
              <Typography component="p" variant="body1">
                Owned by
                <Typography sx={STOwner} component="span" variant="body1">
                  {owner.owner}
                </Typography>
              </Typography>
              <UserCredits creditsNum={owner.price} />
              <UserLocation userLocation={owner.distance} />
              <Button
                sx={STButton}
                fullWidth
                variant="text"
                endIcon={<SCSvgIcons icon={Arrow} />}
              >
                Swap or Exchange
              </Button>
            </Stack>
          </Stack>
          {ownersData[ownersData.length - 1] !== owner && <SCDivider />}
        </React.Fragment>
      ))}
    </>
  )
}

export default MultiBookOwners
