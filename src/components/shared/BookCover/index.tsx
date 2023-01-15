import { Box } from '@mui/material'
import Image from 'next/image'
import IBookCover from './interfaces'
import { STContainer, STImage } from './styles'

const SCBookCover = ({ cover, size, title }: IBookCover) => (
  <Box sx={{ ...STContainer[size], position: 'relative' }}>
    <Image
      style={STImage as React.CSSProperties}
      fill
      sizes="24px"
      alt={title}
      src={cover}
      priority
    />
  </Box>
)

export default SCBookCover
