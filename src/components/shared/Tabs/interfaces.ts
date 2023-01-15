 
import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
interface ITabs {
  tabsData: { tabName: string; [key: string]: JSX.Element | any }[]
  defaultValue: string
  style?:  SxProps<Theme> 
}

export default ITabs
