import { BscMainnet } from './bsc-mainnet'
import { BscTestnet } from './bsc-testnet'
import { EthereumMainnet } from './ethereum-mainnet'
import { Goerli } from './goerli'
import { Sepolia } from './sepolia'
import { SolanaDevnet } from './solana-devnet'
import { SolanaMainnet } from './solana-mainnet'
import { SolanaTestnet } from './solana-testnet'

export const getChain = (chainId: string) => {
  switch (chainId) {
    case '1':
      return new EthereumMainnet()
    case '5':
      return new Goerli()
    case '11155111':
      return new Sepolia()
    case '56':
      return new BscMainnet()
    case '97':
      return new BscTestnet()
    case '3297058409350302':
      return new SolanaMainnet()
    case '1953402825157648':
      return new SolanaTestnet()
    case '3336862955977731':
      return new SolanaDevnet()
    default:
      throw new Error('Unsupported chain id')
  }
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
