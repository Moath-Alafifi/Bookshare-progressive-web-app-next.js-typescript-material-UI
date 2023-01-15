import { Avatar } from '@mui/material'
import IUserAvatar from './interfaces'
import { container } from './styles'

const SCUserAvatar = ({ avatar, size }: IUserAvatar) => (
  <Avatar sx={container[size]} src={avatar} />
)

export default SCUserAvatar
