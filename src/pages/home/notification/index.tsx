import NotificationScreenView from '@/components/view/NotificationScreen'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const NotificationScreenPage = () => <NotificationScreenView />

export const getStaticProps = async ({ locale = 'en' }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default NotificationScreenPage
