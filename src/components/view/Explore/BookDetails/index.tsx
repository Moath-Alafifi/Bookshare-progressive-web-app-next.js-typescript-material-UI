import { SCBackButton, SCBookDetailsItem, SCDivider } from '@/components/shared'
import { IMAGES } from '@/constants'
import { useRouter } from 'next/router'
import React from 'react'
import MultiBookOwners from '../MultiBookOwners'
import OneBookOwner from '../OneBookOwner'

const bookOwners = {
  bookData: [
    {
      id: 2,
      bookName: 'Lord of the Flies',
      bookDescription:
        '  Lorem ipsum dolor sit amet, consecteturfds  wegwe we g erg e adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      cover: IMAGES.bookCoverPlaceholder,
      category: 'Horror',
      author: 'William Golding',
    },
  ],
  owners: [
    {
      id: 1,
      owner: ' Tom Reeves',
      avatar: IMAGES.avatarPlaceholder,
      distance: '50 kilometers',
      bookDescription:
        '  Lorem ipsum dolor sit amet, consecteturfds  wegwe we g erg e adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }, {
      id: 2,
      owner: ' Tom Reeves',
      avatar: IMAGES.avatarPlaceholder,
      distance: '50 kilometers',
      bookDescription:
        '  Lorem ipsum dolor sit amet, consecteturfds  wegwe we g erg e adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ],
}

const BookDetails = () => {
  const router = useRouter()
  //const id = router.query.id as string

  return (
    <>
      <SCBackButton />
      {bookOwners.bookData.map((book) => (
        <React.Fragment key={book.id}>
          {bookOwners.owners.length === 1 ? (
            <SCBookDetailsItem
              cover={book.cover}
              author={book.author}
              bookName={book.bookName}
              category={book.category}
            />
          ) : (
            <SCBookDetailsItem
              cover={book.cover}
              author={book.author}
              bookName={book.bookName}
              category={book.category}
              isCategoryHidden={true}
            />
          )}
        </React.Fragment>
      ))}
      <SCDivider sx={{ mt: 2, mb: 2 }} />
      {bookOwners.owners.length === 1 ? (
        <OneBookOwner ownersData={bookOwners.owners} />
      ) : (
        <MultiBookOwners ownersData={bookOwners.owners} />
      )}
    </>
  )
}

export default BookDetails
