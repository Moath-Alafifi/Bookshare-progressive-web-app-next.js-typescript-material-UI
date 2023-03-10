import { Button as MiuButton, ButtonProps } from '@mui/material'
import IButton from './interfaces'
import { STButton } from './styles'

const SCButton = ({
  buttonSize,
  startIcon,
  text,
  styles,
  ...props
}: IButton & ButtonProps) => {
  return (
    <MiuButton
      sx={{ ...STButton[buttonSize], ...STButton, ...styles }}
      fullWidth
      disableElevation={true}
      startIcon={startIcon}
      {...props}
    >
      {text}
    </MiuButton>
  )
}

export default SCButton
