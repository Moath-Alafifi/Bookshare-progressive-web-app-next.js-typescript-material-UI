import MapExploreList from '@/components/view/Home/MapExploreList'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const MapExploreListPage = () => <MapExploreList />

export const getStaticProps = async ({ locale = 'en' }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default MapExploreListPage
