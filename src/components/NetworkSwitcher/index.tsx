import { Box, Text, UserMenuItem, TelosIcon, VelasIcon } from 'packages/uikit'
import { useRouter } from 'next/router'
import { useTranslation } from 'contexts/Localization'
import Wrapper from './Wrapper'

const chains = [
  { url: 'https://exchange.wagyuswap.xyz', label: 'Velas', Icon: VelasIcon },
  { url: 'https://telos.wagyuswap.xyz', label: 'Telos', Icon: TelosIcon },
]

const NetworkSelect = ({}) => {
  const { t } = useTranslation()
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''
  const selectedOne = chains.find((c) => c.url.toLowerCase() === origin.toLowerCase())

  return (
    <>
      {chains.map((chain) => (
        <UserMenuItem
          key={chain.url}
          style={{ justifyContent: 'flex-start' }}
          onClick={() => {
            if (window) {
              window.location.replace(chain.url)
            }
          }}
        >
          <chain.Icon />
          <Text bold={selectedOne?.url === chain.url.toLowerCase()} pl="12px">
            {chain.label}
          </Text>
        </UserMenuItem>
      ))}
    </>
  )
}

export const NetworkSwitcher = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''
  const selectedOne = chains.find((c) => c.url.toLowerCase() === origin.toLowerCase())

  return (
    <Box height="100%">
      <Wrapper mr="8px" placement="bottom" variant={'default'} text={t(selectedOne?.label || 'Select a Network')}>
        {() => <NetworkSelect />}
      </Wrapper>
    </Box>
  )
}
