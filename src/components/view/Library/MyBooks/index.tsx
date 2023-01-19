import { SCBookTile, SCDivider } from '@/components/shared'
import { IMAGES } from '@/constants'
import React from 'react'

const activityData = [
  {
    id: 1,
    bookName: 'lord of the reign',
    verb: 'followed',
    cover: IMAGES.bookCoverPlaceholder,
    description: 'You Gave Lord of the Flies to Mark M. ',
    date: new Date().toDateString().toString(),
    bookState: 'Public',
  },
  {
    id: 2,
    bookName: 'lord of the reign',
    cover: IMAGES.bookCoverPlaceholder,
    description: 'You Gave Fahrenheit to Alex B.',
    date: new Date().toDateString().toString(),
    bookState: 'Private',
  },
  {
    id: 3,
    bookName: 'lord of the reign',
    cover: IMAGES.bookCoverPlaceholder,
    description: 'Maria Benson Just followed you',
    date: new Date().toDateString().toString(),
    bookState: 'Public',
  },
]

const MyBooks = () => {
  return (
    <>
      {activityData.map((book: any) => (
        <React.Fragment key={book.id}>
          <SCBookTile
            bookName={book.bookName}
            bookState={book.bookState}
            cover={book.cover}
            description={book.description}
            date={book.date}
            isBookStateHidden={false}
            isEditIconHidden={false}
          />
          <SCDivider />
        </React.Fragment>
      ))}
    </>
  )
}

export default MyBooks
