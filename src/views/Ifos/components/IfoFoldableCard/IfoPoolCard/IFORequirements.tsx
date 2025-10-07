import { useMemo } from 'react'
import { Text, Flex, AccountIcon, TeamBattleIcon, Box, useTooltip, LinkExternal } from 'packages/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'

import OkNFTIcon from './Icons/OkNFT'
import OkProfilePointsIcon from './Icons/OkProfilePoints'
import TransWithElement from '../../TransWithElement'

const NotOkNFT = ({ admissionProfile }) => {
  const { t } = useTranslation()

  const keyword = '%Wagyuswap Squad NFT%'

  const rawText = t(`Set %Wagyuswap Squad NFT% as Wagyuswap Profile avatar`)

  return (
    <TransWithElement
      text={rawText}
      keyword={keyword}
      element={
        <>
          <LinkExternal
            style={{ display: 'inline' }}
            href={`https://exchange.wagyuswap.xyz/nfts/collections/${admissionProfile}`}
          >
            {t('Wagyuswap Squad NFT')}
          </LinkExternal>
          <br />
        </>
      }
    />
  )
}

const NotOkProfilePoints = ({ pointThreshold }) => {
  const { account } = useWeb3React()
  const { t } = useTranslation()

  const keyword = '%Wagyuswap Profile%'

  const rawText = t(`Reach %point% or more %Wagyuswap Profile% points`, { point: pointThreshold })

  return (
    <TransWithElement
      text={rawText}
      keyword={keyword}
      element={
        <>
          <br />
          <LinkExternal
            style={{ display: 'inline' }}
            href={`https://exchange.wagyuswap.xyz/nfts/profile/${account}/achievements/`}
          >
            {t('Wagyuswap Profile')}
          </LinkExternal>
        </>
      }
    />
  )
}

const configCriterias = (pointThreshold: number, admissionProfile: string, t) => ({
  isQualifiedNFT: {
    OkIcon: OkNFTIcon,
    okMsg: t('Eligible NFT avatar found!'),
    notOkMsg: <NotOkNFT admissionProfile={admissionProfile} />,
    NotOkIcon: AccountIcon,
    name: t('Wagyuswap Squad'),
  },
  isQualifiedPoints: {
    OkIcon: OkProfilePointsIcon,
    okMsg: t('Profile Points threshold met!'),
    notOkMsg: <NotOkProfilePoints pointThreshold={pointThreshold} />,
    NotOkIcon: TeamBattleIcon,
    name: t('Profile points'),
  },
})

function Item({ type, isOk, isSingle, pointThreshold, admissionProfile }) {
  const { t } = useTranslation()

  const config = useMemo(
    () => configCriterias(pointThreshold, admissionProfile, t),
    [t, pointThreshold, admissionProfile],
  )

  const name = config[type]?.name
  const Icon = isOk ? config[type]?.OkIcon : config[type]?.NotOkIcon
  const msg = isOk ? config[type]?.okMsg : config[type]?.notOkMsg

  const { tooltipVisible, targetRef, tooltip } = useTooltip(msg, { placement: 'bottom', trigger: 'hover' })

  return (
    <Flex
      ref={targetRef}
      mx="4px"
      p="8px"
      justifyContent={isSingle ? 'flex-start' : 'center'}
      flex="1"
      flexWrap="wrap"
      borderRadius="8px"
      border={isOk ? '1px solid' : '1px dashed'}
      borderColor={isOk ? 'secondary' : 'textDisabled'}
      background={isOk ? 'bubblegum' : 'backgroundDisabled'}
    >
      <Box px="8px">
        <Icon width="32px" color={isOk ? 'secondary' : 'textDisabled'} />
      </Box>
      <Text small textAlign="center" px="8px" color={isOk ? 'secondary' : 'textDisabled'}>
        {name}
      </Text>
      {tooltipVisible && tooltip}
    </Flex>
  )
}

export default function IFORequirements({ criterias, pointThreshold, admissionProfile }) {
  if (!criterias?.length) return null

  const isSingle = criterias.length === 1

  return (
    <Flex mx="8px">
      {criterias.map(({ type, value }) => {
        return (
          <Item
            isSingle={isSingle}
            key={type}
            type={type}
            isOk={value}
            pointThreshold={pointThreshold}
            admissionProfile={admissionProfile}
          />
        )
      })}
    </Flex>
  )
}
