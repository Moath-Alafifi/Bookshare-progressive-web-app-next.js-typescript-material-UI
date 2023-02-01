import {
  SCBackButton,
  SCButton,
  SCDivider,
  SCStandardHeader,
  SCSvgIcons,
  SCUserAvatar,
} from '@/components/shared'
import { IMAGES, Plus } from '@/constants'
import {
  Box,
  FormControl,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'

import io from 'Socket.io-client'
import Massage from './Message'
import {
  STButtonsContainer,
  STChattingWithInfoContainer,
  STDivider,
  STFollowButton,
  STPlusIcon,
  STUnFollowButton,
} from './styles'

const UserChatView = () => {
  return (
    <>
      <SCStandardHeader headerText="Chatting with" />
      <Stack sx={STChattingWithInfoContainer}>
        <SCUserAvatar avatar={IMAGES.avatarPlaceholder} size="md" />
        <Box sx={{ flexGrow: 2 }}>
          <Typography sx={{ width: 0 }}>Moath Alafifi</Typography>
        </Box>

        {false ? (
          <SCButton
            buttonSize="sm"
            color="primary"
            text="unFollow"
            styles={STUnFollowButton}
          />
        ) : (
          <SCButton
            buttonSize="sm"
            color="secondary"
            text="follow"
            styles={STFollowButton}
            startIcon={
              <SvgIcon
                component={Plus}
                sx={STPlusIcon}
                inheritViewBox
                color="inherit"
              />
            }
          />
        )}
      </Stack>
      <SCDivider sx={STDivider} />
      <Stack sx={STButtonsContainer}>
        <SCButton
          buttonSize="md"
          color="primary"
          text="Swap the book"
          styles={{
            color: 'primary.contrastText',
          }}
        />
        <SCButton
          buttonSize="md"
          color="secondary"
          text="Give Credits"
          styles={{
            color: 'text.main',
          }}
        />
      </Stack>
      {/* <SCDivider sx={STDivider} /> */}
      <Massage />
    </>
  )
}

export default UserChatView
