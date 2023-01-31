import ExploreView from '@/components/view/Explore'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const ExplorePage = () => <ExploreView />

export const getStaticProps = async ({ locale = 'en' }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})


export default ExplorePage
