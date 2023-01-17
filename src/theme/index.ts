import { PaletteMode } from '@mui/material'
import { Components } from './Components'
import { DarkModePalette, LightModePalette } from './Palette'
import { Typography } from './Typography'

export const themeOptions = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? LightModePalette : DarkModePalette),
  },
  typography: Typography,
  components: Components,
})
