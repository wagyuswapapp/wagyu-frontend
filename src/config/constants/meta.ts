import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'WagyuSwap',
  description:
    'The most popular AMM on BSC by user count! Earn WAG through yield farming or win it in the Lottery, then stake it in Sizzle Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by WagyuSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://exchange.wagyuswap.xyz/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('WagyuSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('WagyuSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('WagyuSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('WagyuSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('WagyuSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('WagyuSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('WagyuSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('WagyuSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('WagyuSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('WagyuSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('WagyuSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('WagyuSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('WagyuSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('WagyuSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('WagyuSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('WagyuSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('WagyuSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('WagyuSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('WagyuSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('WagyuSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('WagyuSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('WagyuSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('WagyuSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('WagyuSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('WagyuSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Wagyuswap Squad')} | ${t('WagyuSwap')}`,
      }
    default:
      return null
  }
}
