import { TextField, InputAdornment, TextFieldProps } from '@mui/material'
import { Search, Filter } from '@/constants'
import { SCSvgIcons } from '@/components/shared'
import { STTextFiled } from './styles'

const SCFilterButton = (props: TextFieldProps) => {
  return (
    <TextField
      type="search"
      fullWidth={true}
      size="small"
      color="primary"
      focused={false}
      sx={STTextFiled}
      InputProps={{
        startAdornment: (
          <InputAdornment disablePointerEvents={true} position="start">
            <SCSvgIcons icon={Search} color="primary" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment disablePointerEvents={true} position="end">
            <SCSvgIcons icon={Filter} color="primary" />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  )
}

export default SCFilterButton
