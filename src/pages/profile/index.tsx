import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ProfileView from '@/components/view/CurrentUserProfile'

const profile = () => <ProfileView />

export const getStaticProps = async ({ locale ='en'}: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default profile
