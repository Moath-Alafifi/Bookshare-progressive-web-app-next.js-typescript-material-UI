import { SCFilterButton, SCSvgIcons } from '@/components/shared'
import { DropdownArrow } from '@/constants'
import { Button, Fade, Menu, MenuItem, Stack, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import React, { useEffect, useState } from 'react'
import IBookCategories from '../BookItemBody/interfaces'
import IBookFilterHandler from './interfaces'
import {
  STCategoriesContainer,
  STCategoriesButton,
  STMenu,
  STFilteredText,
} from './styles'

const options = ['Biographies', 'Classics', 'Fantasy', 'Horror']

const BookFilterHandler = ({
  setFilteredBook,
  BookData,
}: IBookFilterHandler) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selectedIndex, setSelectedIndex] = useState(1)
  const open = Boolean(anchorEl)

  const [searchText, setSearchText] = useState('')
  const { t } = useTranslation(['common'])

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index)
    setAnchorEl(null)
  }

  const filterBooksByCategory = BookData.filter(
    (item: IBookCategories) => item.category === options[selectedIndex]
  )
  useEffect(
    () => setFilteredBook(filterBooksByCategory),
    [options[selectedIndex]]
  )

  const filterBookBySearch = (value: string) =>
    BookData.filter(
      (book: IBookCategories) =>
        book.bookName.toLowerCase().includes(value.toLowerCase()) ||
        book.author.toLowerCase().includes(value.toLowerCase())
    )
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setFilteredBook(filterBookBySearch(target.value))

    if (!target.value) {
      setFilteredBook(filterBooksByCategory)
    }
    setSearchText(target.value)
  }

  return (
    <>
      <SCFilterButton
        onChange={handleChange}
        placeholder="Search for a book by title or author"
      />
      <Stack sx={STCategoriesContainer}>
        <Typography component="p" variant="h2">
          {t('categories')}
        </Typography>
        <Button
          sx={STCategoriesButton}
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          variant="outlined"
          endIcon={<SCSvgIcons icon={DropdownArrow} color="inherit" />}
        >
          {options[selectedIndex]}
        </Button>
        <Menu
          sx={STMenu}
          TransitionComponent={Fade}
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              disabled={index === selectedIndex}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Stack>
      <Typography component="p" sx={STFilteredText}>
        {searchText
          ? 'Search Result Books'
          : `${options[selectedIndex]}  Books`}
      </Typography>
    </>
  )
}

export default BookFilterHandler
