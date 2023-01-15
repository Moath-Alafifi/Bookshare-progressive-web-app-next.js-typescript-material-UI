import { Tabs, Tab } from '@mui/material'
import { useState } from 'react'
import ITabs from './interfaces'
import { STTabText,STTabList  } from './styles'
import React from 'react'

const SCTabs = ({ tabsData, defaultValue, style }: ITabs) => {
  const [value, setValue] = useState(defaultValue)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <>
      <Tabs onChange={handleChange} value={value} sx={{ ...STTabList, ...style }}>
        {tabsData.map((tab, i) => (
          <Tab key={i} sx={STTabText} label={tab.tabName} value={tab.tabName} />
        ))}
      </Tabs>
      {tabsData.map((tab,i) =><React.Fragment key={i}> {tab[value]} </React.Fragment>)}
    </>
  )
}
export default SCTabs
