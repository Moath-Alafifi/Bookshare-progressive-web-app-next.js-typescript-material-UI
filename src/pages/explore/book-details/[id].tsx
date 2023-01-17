import BookDetailsView from '@/components/view/Explore/BookDetails'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const bookDetailsPage = () => <BookDetailsView />

export const getStaticProps = async ({ locale = 'en' }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
export const getStaticPaths = async () => {
   
        return {
          paths: [],
          fallback: "blocking",
        
}}
export default bookDetailsPage
