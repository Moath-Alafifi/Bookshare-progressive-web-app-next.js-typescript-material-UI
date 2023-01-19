import { SCSvgIcons } from '@/components/shared'
import { BackArrow } from '@/constants'
import { ButtonBase, ButtonBaseProps } from '@mui/material'
import { useRouter } from 'next/router'

const SCBackButton = (props: ButtonBaseProps) => {
  const router = useRouter()
  return (
    <ButtonBase onClick={() => router.back()} {...props}>
      <SCSvgIcons icon={BackArrow} color="inherit" />
    </ButtonBase>
  )
}

export default SCBackButton
