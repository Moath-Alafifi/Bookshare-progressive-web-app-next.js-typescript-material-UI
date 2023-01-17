import IUserCredits from './interfaces'
import { useTranslation } from 'next-i18next'
import { Diamond } from '@/constants'
import { SCChip } from '@/components/shared'

const SCUserCredits = ({ creditsNum }: IUserCredits) => {
  const { t } = useTranslation('common')

  return <SCChip icon={Diamond} label={`${creditsNum} ${t('credits')}`} />
}

export default SCUserCredits
