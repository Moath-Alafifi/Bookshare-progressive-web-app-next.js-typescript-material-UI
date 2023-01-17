import { useState } from 'react'
import { AppBar, Tab, Tabs } from '@mui/material'
import { tabsData } from './tabsData'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { STAppBar, STTabs, STTab } from './styles'
import { SCSvgIcons } from '@/components/shared'

const BottomNavigationBar = () => {
  const router = useRouter()
  const pathName = router.pathname
  const tapDefaultValue =
    pathName === '/' ? 'home' : pathName.replace('/', '').replace(/\/.*/, '')

  const [value, setValue] = useState<string>(tapDefaultValue)
  const { t } = useTranslation(['common'])

  const handleChange = (event: React.SyntheticEvent, tabNewValue: string) => {
    setValue(tabNewValue)
  }

  return (
    <AppBar enableColorOnDark={true} sx={STAppBar}>
      <Tabs
        sx={STTabs}
        value={value}
        onChange={handleChange}
        aria-label="Navigation Bar"
        selectionFollowsFocus
        TabIndicatorProps={{ children: <span /> }}
        variant="fullWidth"
      >
        {tabsData(t).map((tabInfo) => (
          <Tab
            key={tabInfo.id}
            icon={<SCSvgIcons icon={tabInfo.icon} color="inherit" />}
            onClick={() => router.push(tabInfo.path)}
            value={tabInfo.value}
            label={tabInfo.tabName}
            sx={STTab}
          />
        ))}
      </Tabs>
    </AppBar>
  )
}

export default BottomNavigationBar
