import { Chain } from '../chain'
import { CryptoScheme } from '../cryptosys'
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
  '1': new EthereumMainnet(),
  '5': new Goerli(),
  '11155111': new Sepolia(),
  '56': new BscMainnet(),
  '97': new BscTestnet(),
  '3297058409350302': new SolanaMainnet(),
  '1953402825157648': new SolanaTestnet(),
  '3336862955977731': new SolanaDevnet(),
}

/**
 * Validate chain id
 * @param chainId The chain id
 * @returns true/false
 */
export const isSupportedChain = (
  chainId: string,
  scheme?: CryptoScheme,
): boolean => {
  const ok = Object.keys(chains).includes(chainId)
  if (!ok) return false
  if (scheme) return chains[chainId].cryptoScheme === scheme
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
