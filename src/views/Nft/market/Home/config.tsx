import { LinkExternal } from 'packages/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config = (t: ContextApi['t']) => {
  return [
    {
      title: t('I sold an NFT, where’s my VLX?'),
      description: [
        t(
          'Trades are settled in WVLX, which is a wrapped version of VLX used on VLX Smart Chain. That means that when you sell an item, WVLX is sent to your wallet instead of VLX.',
        ),
        t('You can instantly swap your WVLX for VLX with no trading fees on WagyuSwap.'),
      ],
    },
    {
      title: t('How can I list my NFT collection on the Market?'),
      description: [
        t('In Phase 2 of the NFT Marketplace, collections must be whitelisted before they may be listed.'),
        t('We are now accepting applications from NFT collection owners seeking to list their collections.'),
        <LinkExternal href="https://docs.wagyuswap.xyz/contact-us/nft-market-applications">
          {t('Please apply here')}
        </LinkExternal>,
      ],
    },
    {
      title: t('What are the fees?'),
      description: [
        t(
          '100% of all platform fees taken by WagyuSwap from sales are used to buy back and BURN WAG tokens in our weekly WAG burns.',
        ),
        t(
          'Platform fees: 2% is subtracted from NFT sales on the market. Subject to change.Collection fees: Additional fees may be taken by collection creators, once those collections are live. These will not contribute to the WAG burns.',
        ),
      ],
    },
  ]
}

export default config
