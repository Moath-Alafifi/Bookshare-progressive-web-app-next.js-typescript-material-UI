import { Typography } from '@mui/material'
import IUserBio from './interfaces'

const SCUserBio = ({ userBio }: IUserBio) => {
  return (
    <Typography variant="subtitle1" component="p" pb={1}>
     {userBio}
    </Typography>
  )
}

export default SCUserBio
