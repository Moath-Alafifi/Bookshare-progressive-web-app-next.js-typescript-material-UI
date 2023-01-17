import React, { useState } from 'react'
import {
  SCButton,
  SCDivider,
  SCFilterButton,
  SCNoFilterResult,
  SCPersonTile,
} from '@/components/shared'
import { Stack } from '@mui/material'
import { IMAGES } from '@/constants'
import { STContainer } from './styles'

const UserData = [
  {
    id: 1,
    followed: false,
    userName: 'Maria Benson ',
    readingLevel: 'Novice Reader',
    avatar: IMAGES.avatarPlaceholder,
  },
  {
    id: 2,
    userName: 'M reh rr tj ',
    readingLevel: 'Novice Reader',
    followed: true,
    avatar: IMAGES.avatarPlaceholder,
  },
]
const ExplorePeople = () => {
  const [isFollow, setIsFollow] = useState(UserData)

  const filterPeopleBySearch = (value: string) =>
    UserData.filter(
      (user) =>
        user.userName.toLowerCase().includes(value.toLowerCase()) ||
        user.readingLevel.toLowerCase().includes(value.toLowerCase())
    )
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setIsFollow(filterPeopleBySearch(target.value))
  }

  const handleFollowed = (id: number) => {
    setIsFollow(
      isFollow.map((user) => {
        if (user.id === id) {
          return { ...user, followed: true }
        } else {
          return user
        }
      })
    )
  }
  const handleUnFollowed = (id: number) => {
    setIsFollow(
      isFollow.map((user) => {
        if (user.id === id) {
          return { ...user, followed: false }
        } else {
          return user
        }
      })
    )
  }

  return (
    <>
      <SCFilterButton onChange={handleChange} placeholder="moath..." />
      {isFollow.length ? (
        isFollow.map((user) => (
          <React.Fragment key={user.id}>
            <Stack sx={STContainer}>
              <SCPersonTile
                key={user.id}
                userName={user.userName}
                readingLevel={user.readingLevel}
                avatar={user.avatar}
              />
              {user.followed === true ? (
                <SCButton
                  buttonSize="sm"
                  color="primary"
                  text="unFollow"
                  styles={{ color: 'primary.contrastText' }}
                  onClick={() => handleUnFollowed(user.id)}
                />
              ) : (
                <SCButton
                  buttonSize="sm"
                  color="secondary"
                  text="follow"
                  styles={{ color: 'text.secondary' }}
                  onClick={() => handleFollowed(user.id)}
                />
              )}
            </Stack>
            {isFollow[isFollow.length - 1] !== user && <SCDivider />}
          </React.Fragment>
        ))
      ) : (
        <SCNoFilterResult />
      )}
    </>
  )
}

export default ExplorePeople
