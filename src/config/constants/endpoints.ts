import { ChainId } from '@wagyu-swap/sdk'
import { CHAIN_ID } from './networks'

const chainId = parseInt(CHAIN_ID, 10)

export const GRAPH_API_PROFILE = process.env.NEXT_PUBLIC_GRAPH_API_PROFILE
export const GRAPH_API_PREDICTION = process.env.NEXT_PUBLIC_GRAPH_API_PREDICTION
export const SNAPSHOT_BASE_URL = process.env.NEXT_PUBLIC_SNAPSHOT_BASE_URL
export const API_PROFILE = process.env.NEXT_PUBLIC_API_PROFILE
export const API_NFT = process.env.NEXT_PUBLIC_API_NFT
export const SNAPSHOT_API = `${SNAPSHOT_BASE_URL}/graphql`
export const SNAPSHOT_HUB_API = `${SNAPSHOT_BASE_URL}/api/message`

/**
 * V1 will be deprecated but is still used to claim old rounds
 */
export const GRAPH_API_PREDICTION_V1 = 'https://api.thegraph.com/subgraphs/name/pancakeswap/prediction'

export const INFO_CLIENT = {
  [ChainId.TESTNET]: 'https://thegraph.testnet.wagyuswap.xyz/subgraphs/name/wagyu',
  [ChainId.MAINNET]: 'https://thegraph3.wagyuswap.xyz/subgraphs/name/wagyu',
}[chainId]

export const BLOCKS_CLIENT = {
  [ChainId.TESTNET]: 'https://thegraph.testnet.wagyuswap.xyz/subgraphs/name/blocks',
  [ChainId.MAINNET]: 'https://thegraph3.wagyuswap.xyz/subgraphs/name/wagyu',
}[chainId]

export const GRAPH_API_LOTTERY = {
  [ChainId.TESTNET]: 'https://thegraph.testnet.wagyuswap.xyz/subgraphs/name/lottery',
  [ChainId.MAINNET]: 'https://thegraph.wagyuswap.xyz/subgraphs/name/lottery',
}[chainId]

export const GRAPH_API_NFTMARKET = process.env.NEXT_PUBLIC_GRAPH_API_NFT_MARKET
export const GRAPH_HEALTH = 'https://api.thegraph.com/index-node/graphql'

export const TC_MOBOX_SUBGRAPH = 'https://api.thegraph.com/subgraphs/name/pancakeswap/trading-competition-v3'
export const TC_MOD_SUBGRAPH = 'https://api.thegraph.com/subgraphs/name/pancakeswap/trading-competition-v4'

export const GALAXY_NFT_CLAIMING_API = 'https://graphigo.prd.galaxy.eco/query'
