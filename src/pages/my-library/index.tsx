 
import LibraryView from '@/components/view/Library'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const myLibraryPage = () => <LibraryView/>

export const getStaticProps = async ({ locale = 'en' }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
export default myLibraryPage
