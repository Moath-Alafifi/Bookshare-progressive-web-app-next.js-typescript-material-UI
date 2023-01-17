import { DarkModeColors, LightModeColors } from '../colors'

export const DarkModePalette = {
  background: {
    default: DarkModeColors.extremeDarkBlue,
    paper: DarkModeColors.veryDarkBlue,
  },
  primary: {
    light: DarkModeColors.softBlue,
    main: DarkModeColors.brightBlue,
    dark: DarkModeColors.darkBlue,
    contrastText: DarkModeColors.white,
  },
  secondary: {
    light: DarkModeColors.DarkGray,
    main: DarkModeColors.veryDarkGray,
    dark: DarkModeColors.extremeDarkGray,
    contrastText: DarkModeColors.white,
  },
  text: {
    primary: DarkModeColors.veryLightGray,
    secondary: DarkModeColors.veryLightWhite,
    disabled: DarkModeColors.mediumLightWhite,
    hint: DarkModeColors.mediumLightWhite,
  },
  divider: DarkModeColors.lightWhite,
}
export const LightModePalette = {
  background: {
    default: LightModeColors.LightGrayishBlue,
    paper: LightModeColors.white,
  },
  primary: {
    light: LightModeColors.softBlue,
    main: LightModeColors.vividBlue,
    dark: LightModeColors.darkBlue,
    contrastText: LightModeColors.white,
  },
  secondary: {
    light: LightModeColors.veryLightGray,
    main: LightModeColors.lightGray,
    dark: LightModeColors.darkGray,
    contrastText: LightModeColors.gauzyBlack,
  },
  text: {
    primary: LightModeColors.black,
    secondary: LightModeColors.mediumLightBlack,
    disabled: LightModeColors.lightBlack,
    hint: LightModeColors.lightBlack,
  },
  divider: LightModeColors.veryLightBlack,
}
