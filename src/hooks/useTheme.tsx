import { createTheme } from '@mui/material'
import { useMemo, useState } from 'react'
import { themeOptions } from '../theme'

const useTheme = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = useMemo(() => createTheme(themeOptions(mode)), [mode])

  return { theme, colorMode }
}

export default useTheme
