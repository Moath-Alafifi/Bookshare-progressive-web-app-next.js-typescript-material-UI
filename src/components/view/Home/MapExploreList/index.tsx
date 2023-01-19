import { Stack, Typography, Button } from '@mui/material'
import {
  SCSvgIcons,
  UserCredits,
  UserLocation,
  SCDivider,
  SCBookCover,
  SCBackButton,
} from '@/components/shared'
import { Arrow, IMAGES } from '@/constants'
import React from 'react'
import {
  STButton,
  STOwner,
  STContainer,
  STBookInfoContainer,
  STBackButton
} from './styles'

const bookDetails = [
  {
    id: 1,
    bookName: 'Lord of the Flies',
    cover: IMAGES.bookCoverPlaceholder,
    category: 'Horror',
    price: 3,
    owner: ' Tom Reeves',
    avatar: IMAGES.avatarPlaceholder,
    distance: '50 kilometers',
  },
  {
    id: 2,
    bookName: 'Lord of the Flies',
    cover: IMAGES.bookCoverPlaceholder,
    category: 'Horror',
    price: 3,
    owner: ' Tom Reeves',
    avatar: IMAGES.avatarPlaceholder,
    distance: '50 kilometers',}
]

const MapExploreList = () => {
  return (
    <>
    <SCBackButton sx={STBackButton}  />
      {bookDetails.map((book) => (
        <React.Fragment key={book.id}>
          <Stack sx={STContainer}>
            <SCBookCover cover={book.cover} size="xl" title={book.bookName} />
            <Stack sx={STBookInfoContainer}>
              <Typography   component="p" variant="h4">
                {book.bookName}
              </Typography>
              <Typography component="p" variant="body1">
                Owned by
                <Typography sx={STOwner} component="span" variant="body1">
                  {book.owner}
                </Typography>
              </Typography>
              <UserCredits creditsNum={book.price} />
              <UserLocation userLocation={book.distance} />
              <Button
                sx={STButton}
                fullWidth
                variant="text"
                endIcon={<SCSvgIcons icon={Arrow} />}
              >
                View Book
              </Button>
            </Stack>
          </Stack>
          {bookDetails[bookDetails.length - 1] !== book && <SCDivider />}
        </React.Fragment>
      ))}
    </>
  )
}

export default MapExploreList
