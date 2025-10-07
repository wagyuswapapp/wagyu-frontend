import React from 'react'
import styled from 'styled-components'
import LogoRound from '../Svg/Icons/LogoRound'
import Text from '../Text/Text'
import Skeleton from '../Skeleton/Skeleton'
import { Colors } from '../../theme'

export interface Props {
  color?: keyof Colors
  cakePriceUsd?: number
  showSkeleton?: boolean
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`

const ImgWrapper = styled.img`
  width: 32px;
`

const CakePrice: React.FC<Props> = ({ cakePriceUsd, color = 'textSubtle', showSkeleton = true }) => {
  return cakePriceUsd ? (
    <PriceLink
      href="https://exchange.wagyuswap.xyz/swap?outputCurrency=0xaBf26902Fd7B624e0db40D31171eA9ddDf078351"
      target="_blank"
    >
      <ImgWrapper alt="logo" className="mr-24" src="/images/logo.png" />
      <Text color={color} bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : showSkeleton ? (
    <Skeleton width={80} height={24} />
  ) : null
}

export default React.memo(CakePrice)
