import { Stack } from '@mui/material'
import { Info } from '@/constants'
import MyCreditsItemList from './MyCreditsItemList'
import { SCUserCredits, SCDivider, SCChip } from '@/components/shared'
import IUserCredits from './interfaces'
import { STChip, STInfoContainer } from './styles'
import React from 'react'

const activityData = [
  {
    id: 1,
    verb: 'swapped',
    creditsNum: 0,
    title: 'You Swapped  Don Quixote from Alex M. ',
    date: new Date().toDateString().toString(),
  },
  {
    id: 2,
    verb: 'got',
    creditsNum: 1,
    title: 'You Gave Lord of Flies to Sophie M. ',
    date: new Date().toDateString().toString(),
  },
  {
    id: 3,
    verb: 'gave',
    creditsNum: 2,
    title: 'You got Hobbit to Sophie M. ',
    date: new Date().toDateString().toString(),
  },
]

const UserCredits = () => {
  return (
    <>
      <Stack sx={STInfoContainer}>
        <SCUserCredits creditsNum={0} />
        <SCChip icon={Info} label="What are credits?" iconColor='disabled' styles={STChip} />
      </Stack>
      {activityData.map((credit: IUserCredits) => (
        <React.Fragment key={credit.id}>
          <MyCreditsItemList
            title={credit.title}
            date={credit.date}
            verb={credit.verb}
            creditsNum={credit.creditsNum}
          />
          {activityData[activityData.length - 1] !== credit && <SCDivider />}
        </React.Fragment>
      ))}
    </>
  )
}

export default UserCredits
