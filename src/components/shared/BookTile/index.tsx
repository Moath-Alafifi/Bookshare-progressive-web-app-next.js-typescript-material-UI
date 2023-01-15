import { SCSvgIcons, SCBookCover } from '@/components/shared'
import { Edit, Private, Public } from '@/constants'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { IBookTile } from './interfaces'
import {
  STBookInfoContainer,
  STBookStateContainer,
  STContainer,
  STEditIcon,
} from './styles'

const SCBookTile = ({
  bookName,
  bookState,
  cover,
  description,
  date,
  isBookStateHidden,
  isEditIconHidden,
}: IBookTile) => {
  return (
    <Stack sx={STContainer}>
      <SCBookCover cover={cover} title={bookName} size="xs" />
      <Stack sx={STBookInfoContainer}>
        <Typography component="p" variant="subtitle2">
          {date}
        </Typography>
        <Typography component="p" variant="subtitle1">
          {description}
        </Typography>
        {!isBookStateHidden && (
          <Stack sx={STBookStateContainer}>
            <SCSvgIcons
              icon={bookState === 'Public' ? Public : Private}
              color={bookState === 'Public' ? 'info' : 'disabled'}
            />
            <Typography component="p" variant="subtitle1">
              {bookState}
            </Typography>
          </Stack>
        )}
      </Stack>
      {!isEditIconHidden && (
        <Box sx={STEditIcon}>
          <SCSvgIcons icon={Edit} />
        </Box>
      )}
    </Stack>
  )
}

export default SCBookTile
