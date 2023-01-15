import { ROUTES } from '@/constants'
import ITabData from './interfaces'
import { Home } from '@/constants'
import { Library } from '@/constants'
import { Chat, Explore, Profile } from '@/constants'

export const tabsData = (translate: any): ITabData[] => {
  return [
    {
      id: 1,
      icon: Home,
      tabName: translate('Home'),
      path: ROUTES.home,
    },
    {
      id: 2,
      icon: Library,
      tabName: translate('my Library'),
      path: ROUTES.myLibrary,
    },
    {
      id: 3,
      icon: Explore,
      tabName: translate('Explore'),
      path: ROUTES.explore,
    },
    {
      id: 4,
      icon: Chat,
      tabName: translate('Chat'),
      path: ROUTES.chat,
    },
    {
      id: 5,
      icon: Profile,
      tabName: translate('Profile'),
      path: ROUTES.profile,
    },
  ]
}
