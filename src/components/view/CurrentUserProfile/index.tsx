import CurrentUserHeader from './CurrentUserHeader'
import { IMAGES } from '@/constants'
import {
  SCTabs,
  SCLibrary,
  SCUserSummary,
  SCDivider,
} from '@/components/shared'
import ActivityBody from '@/components/view/CurrentUserProfile/UserActivity'
import { useTranslation } from 'next-i18next'
import UserCredits from './UserCredits'

const profileData = {
  userName: 'moath alafifi',
  userLocation: 'gaza, palestine',
  userReadingLevel: 'Novice Reader',
  booksNum: 12,
  followersNum: 15,
  followingNum: 20,
  userBio:
    '  Lorem ipsum dolor sit amet, consecteturfds  wegwe we g erg e adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  creditsNum: 15,
  avatar: IMAGES.avatarPlaceholder,
}
const tabsData = (translate: any) => {
  return [
    {
      tabName: translate('activity'),
      Activity: <ActivityBody />,
    },
    {
      tabName: translate('library'),
      Library: <SCLibrary />,
    },
    {
      tabName: translate('myCredits'),
      'My Credits': <UserCredits />,
    },
  ]
}
const ProfileView = () => {
  const { t } = useTranslation(['common'])
  return (
    <>
      <CurrentUserHeader
        creditsNum={profileData.creditsNum}
        avatar={profileData.avatar}
      />
      <SCUserSummary
        userName={profileData.userName}
        userLocation={profileData.userLocation}
        userReadingLevel={profileData.userReadingLevel}
        booksNum={profileData.booksNum}
        followersNum={profileData.followersNum}
        followingNum={profileData.followingNum}
        userBio={profileData.userBio}
      />
      <SCDivider />
      <SCTabs
        tabsData={tabsData(t)}
        defaultValue="Activity"
        style={{
          '& .MuiTabs-flexContainer': { justifyContent: 'flex-start' },
          '& .MuiButtonBase-root': { alignItems: 'flex-start' },
        }}
      />
    </>
  )
}

export default ProfileView
