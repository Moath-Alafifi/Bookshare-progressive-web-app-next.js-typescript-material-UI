import {
  SCButton,
  SCDivider,
  SCFilterButton,
  SCNotificationsBell,
  SCUserCredits,
} from '@/components/shared'
import { IMAGES, ROUTES } from '@/constants'
import { Box, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import ActivityList from './ActivityList'
import { STHeaderContainer, STActivityText } from './styles'
const activitiesData = [
  {
    id: 1,
    avatar: IMAGES.avatarPlaceholder,
    userName: 'Maria Benson ',
    activity: 'just Uploaded Lord of the rings',
    date: ' 5 mins ago',
  },
  {
    id: 2,
    avatar: IMAGES.avatarPlaceholder,
    userName: 'Maria Benson ',
    activity: 'just Uploaded Lord of the rings',
    date: ' 5 mins ago',
  },
]

const HomeView = () => {
  const router = useRouter()
  const redirectToBookListPage = () => {
    router.push(ROUTES.home.mapExploreList)
  }
  return (
    <>
      <Stack sx={STHeaderContainer}>
        <SCUserCredits creditsNum={0} />
        <SCNotificationsBell notificationNum={4} />
      </Stack>
      <SCFilterButton placeholder="Search for a book by title or author" />
      <Stack
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 2,
        }}
      >
        <Typography component="p" variant="h4" sx={{ width: 280, height: 50 }}>
          2540 Books uploaded in your BookHood
        </Typography>
        {/* Map to do */}
        <Box
          sx={{ width: 280, height: 280, backgroundColor: 'background.paper' }}
        ></Box>
        <SCButton
          onClick={redirectToBookListPage}
          buttonSize="md"
          text="View as list"
          styles={{ color: 'primary.contrastText' }}
        />
      </Stack>
      <Typography component="p" variant="h4" sx={STActivityText}>
        Activity
      </Typography>
      {activitiesData.map((activity) => (
        <React.Fragment key={activity.id}>
          <ActivityList
            activity={activity.activity}
            userName={activity.userName}
            avatar={activity.avatar}
            time={activity.date}
          />
          <SCDivider />
        </React.Fragment>
      ))}
    </>
  )
}

export default HomeView
