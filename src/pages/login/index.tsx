import LoginView from '@/components/view/Login'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const LoginPage = () => <LoginView />

export const getStaticProps = async ({ locale = 'en' }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})


export default LoginPage
