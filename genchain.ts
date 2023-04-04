import fs from 'fs'
import { rimrafSync } from 'rimraf'
import { sha512 } from '@noble/hashes/sha512'
import BN from 'bn.js'

enum CryptoSystem {
  ecdsa = 'ECDSA',
  eddsa = 'EdDSA',
}

const customizeChainId = (name: string) => {
  const r = BN.red(new BN(Number.MAX_SAFE_INTEGER))
  const seed = new BN(sha512(name), 16, 'le')
  return seed.toRed(r).toNumber()
}

const chainIds: Array<{ name: string; id: number; sys: CryptoSystem }> = [
  {
    name: 'Ethereum Mainnet',
    id: 1,
    sys: CryptoSystem.ecdsa,
  },
  {
    name: 'Goerli',
    id: 5,
    sys: CryptoSystem.ecdsa,
  },
  {
    name: 'Sepolia',
    id: 11155111,
    sys: CryptoSystem.ecdsa,
  },
  {
    name: 'Binance Smart Chain Mainnet',
    id: 56,
    sys: CryptoSystem.ecdsa,
  },
  {
    name: 'Binance Smart Chain Testnet',
    id: 97,
    sys: CryptoSystem.ecdsa,
  },
  {
    name: 'Solana Mainnet',
    id: customizeChainId('Solana Mainnet'),
    sys: CryptoSystem.eddsa,
  },
  {
    name: 'Solana Testnet',
    id: customizeChainId('Solana Testnet'),
    sys: CryptoSystem.eddsa,
  },
  {
    name: 'Solana Devnet',
    id: customizeChainId('Solana Devnet'),
    sys: CryptoSystem.eddsa,
  },
]

rimrafSync('./index.md')
fs.copyFileSync('./README.md', './index.md')
fs.appendFileSync('./index.md', '\n# References\n')
fs.appendFileSync(
  './index.md',
  '| # | Name | Crypto System | Chain ID | Hex |\n',
)
fs.appendFileSync('./index.md', '| - | - | - | - | - |\n')
chainIds.forEach(({ name, id, sys }, i) => {
  const hex = new BN(id).toArrayLike(Buffer, 'be').toString('hex')
  fs.appendFileSync(
    './index.md',
    `| ${i} | ${name} | ${sys} | ${id} | 0x${hex.replace(/^0+/, '')} |\n`,
  )
  console.log(`✅ ${name} - ${id}: 0x${hex.replace(/^0+/, '')}`)
})
