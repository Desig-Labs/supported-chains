import { Chain, RpcProvider } from '../chain'
import { Curve } from '../curve'
import { BscMainnet } from './bsc-mainnet'
import { BscTestnet } from './bsc-testnet'
import { EthereumMainnet } from './ethereum-mainnet'
import { Goerli } from './goerli'
import { Sepolia } from './sepolia'
import { SolanaDevnet } from './solana-devnet'
import { SolanaMainnet } from './solana-mainnet'
import { SolanaTestnet } from './solana-testnet'
import { SuiMainnet } from './sui-mainnet'
import { SuiTestnet } from './sui-testnet'
import { SuiDevnet } from './sui-devnet'
import { AptosMainnet } from './aptos-mainnet'
import { AptosTestnet } from './aptos-testnet'
import { AptosDevnet } from './aptos-devnet'
import { ZetaMainnet } from './zeta-mainnet'
import { ZetaTestnet } from './zeta-testnet'
import { LineaTestnet } from './linea-testnet'
import { LineaMainnet } from './linea-mainnet'
import { PolygonMainNet } from './polygon-mainnet'
import { PolygonMumbai } from './polygon-mumbai'
import { PolygonZkEVMTestnet } from './polygon-zkevm-testnet'
import { PolygonZkEVMMainNet } from './polygon-zkevm-mainnet'
import { MoonBaseAlpha } from './moonbase'
import { Moonbeam } from './moonbeam'
import { SeiTestnet } from './sei-testnet'
import { ShardeumTestnet } from './shardeum-testnet'
import { ArbitrumTestnet } from './arbitrum-testnet'
import { ArbitrumMainnet } from './arbitrum-mainnet'
import { TaikoKatla } from './taiko-katla'
import { SeiMainnet } from './sei-mainnet'
import { BaseMainnet } from './base-mainnet'
import { BaseTestnet } from './base-testnet'
import { VictionMainnet } from './viction-mainnet'
import { VictionTestnet } from './viction-testnet'
import { AvalancheMainnet } from './avalanche-mainnet'
import { AvalancheFuji } from './avalanche-fuji'
import { MovementTestnet } from './movement-testnet'
import { X1Testnet } from './x1-testnet'
import { InjectiveMainnet } from './injective-mainnet'
import { InjectiveTestnet } from './injective-testnet'
import { BlastMainnet } from './blast-mainnet'
import { BlastTestnet } from './blast-testnet'
import { BeraTestnet } from './bera-testnet'
import { Ancient8Mainnet } from './ancient8-mainnet'
import { Ancient8Testnet } from './ancient8-testnet'
import { FantomMainnet } from './fantom-mainnet'
import { FantomTestnet } from './fantom-testnet'
import { ScrollMainnet } from './scroll-mainnet'
import { ScrollTestnet } from './scroll-testnet'
import { MantaPacificMainnet } from './manta-pacific-mainnet'
import { MantaPacificTestnet } from './manta-pacific-testnet'
import { ConfluxTestnet } from './conflux-testnet'
import { ConfluxMainnet } from './conflux-mainnet'

/**
 * Get all chains with provider
 * @param provider RpcProvider (optional)
 * @returns list chains
 */
export const getChains = (provider?: RpcProvider) => {
  const chains: Record<string, Chain> = {
    '0x1': new EthereumMainnet(provider),
    '0x5': new Goerli(provider),
    '0xaa36a7': new Sepolia(provider),
    '0x38': new BscMainnet(provider),
    '0x61': new BscTestnet(provider),
    '0x1f92': new ShardeumTestnet(),
    '0xa4b1': new ArbitrumMainnet(provider),
    '0x66eed': new ArbitrumTestnet(),
    '0x28c60': new TaikoKatla(),
    '0xbb6a83b4b049e': new SolanaMainnet(provider),
    '0x6f09c097f2c10': new SolanaTestnet(),
    '0xbdadbf327bc03': new SolanaDevnet(),
    '0xb0ae19bc39993': new SuiMainnet(provider),
    '0x1e157a4655b689': new SuiTestnet(provider),
    '0x5613adbe82509': new SuiDevnet(),
    '0x21c26a5834152': new AptosMainnet(),
    '0x98a2cc14e0838': new AptosTestnet(),
    '0x227464c4a29ee': new AptosDevnet(),
    '0x1b58': new ZetaMainnet(),
    '0x1b59': new ZetaTestnet(provider),
    '0xe708': new LineaMainnet(provider),
    '0xe704': new LineaTestnet(),
    '0x89': new PolygonMainNet(provider),
    '0x13881': new PolygonMumbai(provider),
    '0x44d': new PolygonZkEVMMainNet(provider),
    '0x5a2': new PolygonZkEVMTestnet(provider),
    '0x504': new Moonbeam(provider),
    '0x507': new MoonBaseAlpha(),
    '0x24a5164fcc04': new SeiMainnet(provider),
    '0xb66e1ec8b2d65': new SeiTestnet(),
    '0x2105': new BaseMainnet(provider),
    '0x14a33': new BaseTestnet(provider),
    '0x58': new VictionMainnet(),
    '0x59': new VictionTestnet(),
    '0xa86a': new AvalancheMainnet(provider),
    '0xa869': new AvalancheFuji(provider),
    '0xd990377fe4ecf': new MovementTestnet(),
    '0xc3': new X1Testnet(),
    '0x63f93d0f947be': new InjectiveMainnet(),
    '0xd49780436dc91': new InjectiveTestnet(),
    '0x13e31': new BlastMainnet(provider),
    '0xa0c71fd': new BlastTestnet(provider),
    '0x138d5': new BeraTestnet(),
    '0x34fb5e38': new Ancient8Mainnet(),
    '0x1ad1ba8': new Ancient8Testnet(),
    '0xfa': new FantomMainnet(provider),
    '0xfa2': new FantomTestnet(provider),
    '0x82750': new ScrollMainnet(provider),
    '0x8274f': new ScrollTestnet(provider),
    '0xa9': new MantaPacificMainnet(),
    '0x34816d': new MantaPacificTestnet(),
    '0x406': new ConfluxMainnet(),
    '0x47': new ConfluxTestnet(),
  }
  return chains
}

/**
 * All instances of Chain
 */
export const chains = getChains()

/**
 * All chain ids
 */
export const chainIds = Object.keys(chains)

/**
 * Validate chain id
 * @param chainId The chain id
 * @returns true/false
 */
export const isSupportedChain = (chainId: string, curve?: Curve): boolean => {
  const ok = chainIds.includes(chainId)
  if (!ok) return false
  if (curve) return chains[chainId].curve === curve
  return true
}

/**
 * Get an instance of Chain by chain id
 * @param chainId Chain id
 * @returns
 */
export const getChain = (chainId: string, provider?: RpcProvider): Chain => {
  if (!isSupportedChain(chainId)) throw new Error('Unsupported chain id')
  const chains = getChains(provider)
  return chains[chainId]
}

export {
  EthereumMainnet,
  Goerli,
  Sepolia,
  BscMainnet,
  BscTestnet,
  SolanaMainnet,
  SolanaTestnet,
  SolanaDevnet,
  SuiMainnet,
  SuiTestnet,
  SuiDevnet,
  AptosMainnet,
  AptosTestnet,
  AptosDevnet,
  ZetaTestnet,
  ZetaMainnet,
  LineaTestnet,
  LineaMainnet,
  PolygonMainNet,
  PolygonMumbai,
  PolygonZkEVMTestnet,
  PolygonZkEVMMainNet,
  MoonBaseAlpha,
  Moonbeam,
  SeiMainnet,
  SeiTestnet,
  ArbitrumMainnet,
  ArbitrumTestnet,
  TaikoKatla,
  ShardeumTestnet,
  BaseMainnet,
  BaseTestnet,
  VictionMainnet,
  VictionTestnet,
  AvalancheMainnet,
  AvalancheFuji,
  MovementTestnet,
  X1Testnet,
  InjectiveMainnet,
  InjectiveTestnet,
  BlastMainnet,
  BlastTestnet,
  BeraTestnet,
  Ancient8Mainnet,
  Ancient8Testnet,
  FantomMainnet,
  FantomTestnet,
  ScrollMainnet,
  ScrollTestnet,
  MantaPacificMainnet,
  MantaPacificTestnet,
  ConfluxMainnet,
  ConfluxTestnet,
}
