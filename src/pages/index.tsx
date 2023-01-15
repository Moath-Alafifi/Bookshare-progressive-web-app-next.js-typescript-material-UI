import ButtonMode from 'components/shared/ButtonMode'
 
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const HomePage = () => <ButtonMode />

export const getStaticProps = async ({ locale = 'en' }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
export default HomePage
