import { SCBookCover } from '@/components/shared'
import { Stack, Typography } from '@mui/material'
import { STbookName, STCategory, STContainer, STAuthor } from './styles'
import IBookDetailsItem from './interfaces'

const SCBookDetailsItem = ({
  cover,
  bookName,
  author,
  category,
  isCategoryHidden,
}: IBookDetailsItem) => {
  return (
    <Stack sx={STContainer}>
      <SCBookCover cover={cover} size="xl" title={bookName} />
      {!isCategoryHidden && (
        <Stack sx={STCategory}>
          <Typography component="p" variant="subtitle1">
            {category}
          </Typography>
        </Stack>
      )}
      <Typography component="p" variant="subtitle1" sx={STAuthor}>
        {author}
      </Typography>
      <Typography component="p" variant="h4" sx={STbookName}>
        {bookName}
      </Typography>
    </Stack>
  )
}

export default SCBookDetailsItem
