import S from './Logo.styled'

import type { LogoProps } from './types'

const Logo = ({ size }: LogoProps) => {
  return <S.LogoWrapper size={size}>여행&U</S.LogoWrapper>
}

export default Logo
