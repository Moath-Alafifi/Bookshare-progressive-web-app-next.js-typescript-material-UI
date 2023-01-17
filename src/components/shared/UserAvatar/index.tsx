import { Avatar } from '@mui/material'
import IUserAvatar from './interfaces'
import { STContainer } from './styles'

const SCUserAvatar = ({ avatar, size }: IUserAvatar) => (
  <Avatar sx={STContainer[size]} src={avatar} />
)

export default SCUserAvatar
