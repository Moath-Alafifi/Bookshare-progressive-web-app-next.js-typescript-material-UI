import { SCBookTile, SCPersonTile, SCDivider } from '@/components/shared'
import { IMAGES } from '@/constants'
import React from 'react'
import FollowedActivityBody from './PersonTile'

const activityData = [
  {
    id: 1,
    bookName: 'lord of the reign',
    verb: 'followed',
    avatar: IMAGES.avatarPlaceholder,
    userName: 'Maria Benson ',
    readingLevel: 'Novice Reader',
    date: new Date().toDateString().toString(),
  },
  {
    id: 2,
    bookName: 'lord of the reign',
    cover: IMAGES.bookCoverPlaceholder,
    description: 'You Gave Fahrenheit to Alex B.',
    date: new Date().toDateString().toString(),
  },
  {
    id: 3,
    bookName: 'lord of the reign',
    cover: IMAGES.bookCoverPlaceholder,
    description: 'Maria Benson Just followed you',
    date: new Date().toDateString().toString(),
  },
]

const UserActivity = () => {
  return (
    <>
      {activityData.map((behavior: any) => (
        <React.Fragment key={behavior.id}>
          {behavior.verb === 'followed' ? (
            <FollowedActivityBody
              date={behavior.date}
              avatar={behavior.avatar}
              userName={behavior.userName}
            />
          ) : (
            <SCBookTile
              bookName={behavior.bookName}
              cover={behavior.cover}
              description={behavior.description}
              date={behavior.date}
              isBookStateHidden={true}
              isEditIconHidden={true}
            />
          )}
          {activityData[activityData.length - 1] !== behavior && <SCDivider />}
        </React.Fragment>
      ))}
    </>
  )
}

export default UserActivity
