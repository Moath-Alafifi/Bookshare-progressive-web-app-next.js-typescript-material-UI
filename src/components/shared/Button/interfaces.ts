import { Theme } from "@emotion/react"
import { SxProps } from "@mui/material"
import React from "react"

type size='sm'|'md'|'lg'|'xl' 
interface IButton {
  buttonSize: size
  startIcon?: JSX.Element
  text: string
  styles?: React.CSSProperties
}
export default IButton
