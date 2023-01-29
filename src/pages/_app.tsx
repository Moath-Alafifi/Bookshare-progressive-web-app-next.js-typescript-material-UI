import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import Layout from 'components/Layout'
import 'styles/global.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import useTheme from 'hooks/useTheme'
import { ColorModeContext } from 'contexts'
import { QueryClient, QueryClientProvider } from 'react-query'
import AuthContextProvider from '@/contexts/AuthContext'

const App = ({ Component, pageProps }: AppProps) => {
  const { colorMode, theme } = useTheme()

  const queryClient = new QueryClient()
  return (
    <AuthContextProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </QueryClientProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AuthContextProvider>
  )
}
export default appWithTranslation(App)
