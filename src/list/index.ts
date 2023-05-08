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

/**
 * All instances of Chain
 */
export const chains: Record<string, Chain> = {
  '0x1': new EthereumMainnet(),
  '0x5': new Goerli(),
  '0xaa36a7': new Sepolia(),
  '0x38': new BscMainnet(),
  '0x61': new BscTestnet(),
  '0xbb6a83b4b049e': new SolanaMainnet(),
  '0x6f09c097f2c10': new SolanaTestnet(),
  '0xbdadbf327bc03': new SolanaDevnet(),
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
}
