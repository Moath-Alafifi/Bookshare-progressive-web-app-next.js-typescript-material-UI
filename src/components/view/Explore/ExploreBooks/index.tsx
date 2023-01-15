import { Stack } from '@mui/material'
import { useState } from 'react'
import { SCSvgIcons } from '@/components/shared'
import { IMAGES, NoFilterResult } from '@/constants'
import BookFilterHandler from './BookFilterHandler'
import BookItemBody from './BookItemBody'
import IBookCategories from './BookItemBody/interfaces'
import { STItemsContainer } from './styles'

const BookData = [
  {
    id: 1,
    cover: IMAGES.bookCoverPlaceholder,
    bookName: 'Lord of the Flies',
    author: 'William Golding',
    category: 'Fantasy',
    owner: ' Tom Reeves',
  },
  {
    id: 2,
    cover: IMAGES.bookCoverPlaceholder,
    bookName: 'Lord of the Flies',
    author: 'William Golding',
    category: 'Classics',
  },
  {
    id: 3,
    cover: IMAGES.bookCoverPlaceholder,
    bookName: 'Lord of the Flies',
    author: 'William Golding',
    category: 'classics',
  },
  {
    id: 4,
    cover: IMAGES.bookCoverPlaceholder,
    bookName: 'Lord of the Flies',
    author: 'William Golding',
    category: 'Fantasy',
  },
  {
    id: 5,
    cover: IMAGES.bookCoverPlaceholder,
    bookName: 'Lord of the Flies',
    author: 'William Golding',
    category: 'Horror',
  },
]
const ExploreBooksView = () => {
  const [filteredBook, setFilteredBook] = useState<IBookCategories | any>()

  return (
    <>
      <BookFilterHandler
        setFilteredBook={setFilteredBook}
        BookData={BookData}
      />
      <Stack sx={STItemsContainer}>
        {filteredBook?.length ? (
          filteredBook.map((book: IBookCategories) => (
            <BookItemBody
              key={book.id}
              id={book.id}
              cover={book.cover}
              bookName={book.bookName}
              author={book.author}
            />
          ))
        ) : (
          <SCSvgIcons icon={NoFilterResult} />
        )}
      </Stack>
    </>
  )
}

export default ExploreBooksView
