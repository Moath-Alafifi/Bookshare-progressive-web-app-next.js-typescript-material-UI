import * as React from 'react'
import { useContext } from 'react'
import { useTheme, Box, IconButton } from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { ColorModeContext } from '@/contexts'
import { useTranslation } from 'next-i18next'
import { STContainer } from './styles'

const SCButtonMode = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  const { t } = useTranslation('common')

  return (
    <Box sx={STContainer}>
      {t(theme.palette.mode)}
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  )
}
export default SCButtonMode
