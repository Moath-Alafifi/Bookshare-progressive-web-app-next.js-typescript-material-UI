import { SCButton, SCSvgIcons, SCTabs } from '@/components/shared'
import { Plus } from '@/constants'
import { Stack } from '@mui/material'
import { useTranslation } from 'next-i18next'
import BooksIGave from './BooksIGave'
import BooksIGot from './BooksIGot'
import MyBooks from './MyBooks'
import { STButtonContainer, STTabs } from './styles'

const tabsData = (translate: any) => {
  return [
    {
      tabName: translate('myBooks'),
      'My Books': <MyBooks />,
    },
    {
      tabName: translate('booksIGot'),
      'Books I Got': <BooksIGot />,
    },
    {
      tabName: translate('booksIGave'),
      'Books I Gave': <BooksIGave />,
    },
  ]
}
const LibraryView = () => {
  const { t } = useTranslation(['common'])
  return (
    <>
      <Stack sx={STButtonContainer}>
        <SCButton
          text="Add a new book"
          startIcon={<SCSvgIcons icon={Plus} />}
          buttonSize="md"
        />
      </Stack>
      <SCTabs tabsData={tabsData(t)} defaultValue="My Books" style={STTabs} />
    </>
  )
}

export default LibraryView
