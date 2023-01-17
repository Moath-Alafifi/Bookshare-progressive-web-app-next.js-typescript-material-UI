import BottomNavigationBar from 'components/shared/BottomNavigationBar'
import { Container } from '@mui/material'
import { STContainer } from './styles'
import ILayout from './interfaces'
import ButtonMode from '../shared/ButtonMode'

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <ButtonMode />
      <Container sx={STContainer} maxWidth={false}>
        {children}
        <BottomNavigationBar />
      </Container>
    </>
  )
}

export default Layout
