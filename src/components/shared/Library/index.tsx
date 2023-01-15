import { IMAGES } from '@/constants'
import { Stack } from '@mui/material'
import BookCover from '../BookCover'
import { STContainer } from './styles'

const libraryData = [
  {
    id: 1,
    cover: IMAGES.bookCoverPlaceholder,
    title: 'book Name',
    swapped: true,
  },
  {
    id: 2,
    cover: IMAGES.bookCoverPlaceholder,
    title: 'book Name',
  },
  {
    id: 3,
    cover: IMAGES.bookCoverPlaceholder,
    title: 'book Name',
  },
  {
    id: 4,
    cover: IMAGES.bookCoverPlaceholder,
    title: 'book Name',
  },
  {
    id: 5,
    cover: IMAGES.bookCoverPlaceholder,
    title: 'book Name',
  },
  {
    id: 6,
    cover: IMAGES.bookCoverPlaceholder,
    title: 'book Name',
  },
  {
    id: 7,
    cover: IMAGES.bookCoverPlaceholder,
    title: 'book Name',
  },
]
const SCLibrary = () => {
  return (
    <Stack sx={STContainer}>
      {libraryData.map((book) => (
        <BookCover
          key={book.id}
          cover={book.cover}
          title={book.title}
          size="md"
        />
      ))}
    </Stack>
  )
}

export default SCLibrary
