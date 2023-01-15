import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import Layout from 'components/Layout'
import 'styles/global.css'
import { ThemeProvider } from '@mui/material'
import useTheme from 'hooks/useTheme'
import { ColorModeContext } from 'contexts'

const App = ({ Component, pageProps }: AppProps) => {
  const { colorMode, theme } = useTheme()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
export default appWithTranslation(App)

