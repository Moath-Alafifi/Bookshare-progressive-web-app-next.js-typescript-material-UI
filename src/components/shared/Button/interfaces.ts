import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'
 

type size = 'sm' | 'md' | 'lg' | 'xl' | 'xs'
interface IButton {
  buttonSize: size
  startIcon?: JSX.Element
  text: string
  styles?: any
}
export default IButton
