import { Chain } from '../chain'
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
import { TaikoJolnir } from './taiko-jolnir'
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
import { BlastTestnet } from './blast-testnet'
import { BeraTestnet } from './bera-testnet'

/**
 * All instances of Chain
 */
export const chains: Record<string, Chain> = {
  '0x1': new EthereumMainnet(),
  '0x5': new Goerli(),
  '0xaa36a7': new Sepolia(),
  '0x38': new BscMainnet(),
  '0x61': new BscTestnet(),
  '0x1f91': new ShardeumTestnet(),
  '0xa4b1': new ArbitrumMainnet(),
  '0x66eed': new ArbitrumTestnet(),
  '0x28c5f': new TaikoJolnir(),
  '0xbb6a83b4b049e': new SolanaMainnet(),
  '0x6f09c097f2c10': new SolanaTestnet(),
  '0xbdadbf327bc03': new SolanaDevnet(),
  '0xb0ae19bc39993': new SuiMainnet(),
  '0x1e157a4655b689': new SuiTestnet(),
  '0x5613adbe82509': new SuiDevnet(),
  '0x21c26a5834152': new AptosMainnet(),
  '0x98a2cc14e0838': new AptosTestnet(),
  '0x227464c4a29ee': new AptosDevnet(),
  '0x1b59': new ZetaTestnet(),
  '0xe708': new LineaMainnet(),
  '0xe704': new LineaTestnet(),
  '0x89': new PolygonMainNet(),
  '0x13881': new PolygonMumbai(),
  '0x44d': new PolygonZkEVMMainNet(),
  '0x5a2': new PolygonZkEVMTestnet(),
  '0x504': new Moonbeam(),
  '0x507': new MoonBaseAlpha(),
  '0x24a5164fcc04': new SeiMainnet(),
  '0xb66e1ec8b2d65': new SeiTestnet(),
  '0x2105': new BaseMainnet(),
  '0x14a33': new BaseTestnet(),
  '0x58': new VictionMainnet(),
  '0x59': new VictionTestnet(),
  '0xa86a': new AvalancheMainnet(),
  '0xa869': new AvalancheFuji(),
  '0xd990377fe4ecf': new MovementTestnet(),
  '0xc3': new X1Testnet(),
  '0x63f93d0f947be': new InjectiveMainnet(),
  '0xd49780436dc91': new InjectiveTestnet(),
  '0xa0c71fd': new BlastTestnet(),
  '0x138d5': new BeraTestnet(),
}

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
export const getChain = (chainId: string): Chain => {
  if (!isSupportedChain(chainId)) throw new Error('Unsupported chain id')
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
  TaikoJolnir,
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
  BlastTestnet,
  BeraTestnet,
}
