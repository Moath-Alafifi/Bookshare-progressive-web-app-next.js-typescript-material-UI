import HomeView from '@/components/view/Home' 
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const HomePage = () => <HomeView />

export const getStaticProps = async ({ locale = 'en' }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
export default HomePage
