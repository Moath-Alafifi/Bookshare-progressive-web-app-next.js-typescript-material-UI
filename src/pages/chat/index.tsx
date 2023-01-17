import ChatView from '@/components/view/Chat'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const chatPage = () => <ChatView />
export const getStaticProps = async ({ locale = 'en' }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default chatPage
