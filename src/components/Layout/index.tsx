import BottomNavigationBar from 'components/shared/BottomNavigationBar'
import { Box, Container } from '@mui/material'
import { container, fullWidthContainer } from './styles'
import ILayout from './interfaces'
import ButtonMode from '../shared/ButtonMode'

const Layout = ({ children }: ILayout) => {
  return (
    <Box sx={fullWidthContainer}>
      <ButtonMode/>
      <Container sx={container} maxWidth={false}>
        {children}
        <BottomNavigationBar />
      </Container>
    </Box>
  )
}

export default Layout
