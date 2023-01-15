import { SxProps, Theme } from '@mui/material'
 

type color =
  | 'disabled'
  | 'action'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning'
  | undefined

interface IChip {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  iconColor?: color
  styles?: SxProps<Theme>
}
export default IChip
