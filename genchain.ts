import { sha512 } from '@noble/hashes/sha512'
import BN from 'bn.js'

const customizeChainId = (name: string) => {
  const r = BN.red(new BN(Number.MAX_SAFE_INTEGER))
  const seed = new BN(sha512(name), 16, 'le')
  return seed.toRed(r).toNumber()
}

const chainIds: Array<{ name: string; id: number }> = [
  {
    name: 'Ethereum Mainnet',
    id: 1,
  },
  {
    name: 'Goerli',
    id: 5,
  },
  {
    name: 'Sepolia',
    id: 11155111,
  },
  {
    name: 'Binance Smart Chain Mainnet',
    id: 56,
  },
  {
    name: 'Binance Smart Chain Testnet',
    id: 97,
  },
  {
    name: 'Solana Mainnet',
    id: customizeChainId('Solana Mainnet'),
  },
  {
    name: 'Solana Testnet',
    id: customizeChainId('Solana Testnet'),
  },
  {
    name: 'Solana Devnet',
    id: customizeChainId('Solana Devnet'),
  },
]

chainIds.forEach(({ name, id }) => {
  const hex = new BN(id).toArrayLike(Buffer, 'be').toString('hex')
  console.log(`✅ ${name} - ${id}: 0x${hex.replace(/^0+/, '')}`)
})
