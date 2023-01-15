import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { STTabs, STTabsContainer } from './styles'
import { SCNotificationsBell } from '@/components/shared'
import { Stack, Tab, Tabs } from '@mui/material'
import ExploreBooks from './ExploreBooks'
import ExplorePeople from './ExplorePeople'

const ExploreView = () => {
  const { t } = useTranslation()
  const [selectedTab, setSelectedTab] = useState('books')

  const handleChange = (event: React.SyntheticEvent, newTab: string) => {
    setSelectedTab(newTab)
  }

  const TABS: any = {
    books: <ExploreBooks />,
    people: <ExplorePeople />,
  }

  return (
    <>
      <Stack sx={STTabsContainer}>
        <Tabs value={selectedTab} onChange={handleChange} sx={STTabs}>
          <Tab label={t('books')} value="books" />
          <Tab label={t('people')} value="people" />
        </Tabs>
        <SCNotificationsBell />
      </Stack>
      {TABS[selectedTab]}
    </>
  )
}

export default ExploreView
