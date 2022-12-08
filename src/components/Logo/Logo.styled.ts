import styled from 'styled-components'

import type { LogoProps } from './types'

const LogoWrapper = styled.h1<LogoProps>`
  font-size: ${({ size }) => (size === 'small' ? '10px' : '20px')};
`

export default {
  LogoWrapper,
}
