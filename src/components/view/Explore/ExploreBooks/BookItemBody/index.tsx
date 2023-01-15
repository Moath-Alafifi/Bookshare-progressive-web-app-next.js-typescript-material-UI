import { Stack, Typography } from '@mui/material'
import { SCBookCover } from '@/components/shared'
import IBookCategories from './interfaces'
import { STAuthor, STBookName, STContainer } from './styles'
import { useRouter } from 'next/router'

const BookItemBody = ({ cover, bookName, author, id }: IBookCategories) => {
  const router = useRouter()

  const redirectBookDetails = (id: any) => {
    router.push('/explore/book-details/:id'.replace(':id', id))
  }

  return (
    <Stack onClick={() => redirectBookDetails(id)} sx={STContainer}>
      <SCBookCover cover={cover} size="sm" title={bookName} />
      <Typography component="p" sx={STBookName}>
        {bookName}
      </Typography>
      <Typography component="p" sx={STAuthor}>
        {author}
      </Typography>
    </Stack>
  )
}

export default BookItemBody
