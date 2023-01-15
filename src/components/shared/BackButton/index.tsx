import { SCSvgIcons } from '@/components/shared'
import { BackArrow } from '@/constants'
import { ButtonBase } from '@mui/material'
import { useRouter } from 'next/router'

const SCBackButton = () => {
  const router = useRouter()
  return (
    <ButtonBase onClick={() => router.back()}>
      <SCSvgIcons icon={BackArrow}  />
    </ButtonBase>
  )
}

export default SCBackButton
