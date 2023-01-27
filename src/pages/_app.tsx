import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import Layout from 'components/Layout'
import 'styles/global.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import useTheme from 'hooks/useTheme'
import { ColorModeContext } from 'contexts'
import { QueryClient, QueryClientProvider  } from 'react-query'

const App = ({ Component, pageProps }: AppProps) => {
  const { colorMode, theme } = useTheme()

 
  const queryClient = new QueryClient()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
        </Layout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
export default appWithTranslation(App)
