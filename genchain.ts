import fs from 'fs'
import { rimrafSync } from 'rimraf'
import { sha512 } from '@noble/hashes/sha512'
import BN from 'bn.js'
import { Curve } from './src/curve'

const customizeChainId = (name: string) => {
  const r = BN.red(new BN(Number.MAX_SAFE_INTEGER))
  const seed = new BN(sha512(name), 16, 'le')
  return seed.toRed(r).toNumber()
}

const chainIds: Array<{ name: string; id: number; curve: Curve }> = [
  {
    name: 'Ethereum Mainnet',
    id: 1,
    curve: Curve.secp256k1,
  },
  {
    name: 'Goerli',
    id: 5,
    curve: Curve.secp256k1,
  },
  {
    name: 'Sepolia',
    id: 11155111,
    curve: Curve.secp256k1,
  },
  {
    name: 'Binance Smart Chain Mainnet',
    id: 56,
    curve: Curve.secp256k1,
  },
  {
    name: 'Binance Smart Chain Testnet',
    id: 97,
    curve: Curve.secp256k1,
  },
  {
    name: 'Solana Mainnet',
    id: customizeChainId('Solana Mainnet'),
    curve: Curve.ed25519,
  },
  {
    name: 'Solana Testnet',
    id: customizeChainId('Solana Testnet'),
    curve: Curve.ed25519,
  },
  {
    name: 'Solana Devnet',
    id: customizeChainId('Solana Devnet'),
    curve: Curve.ed25519,
  },
  {
    name: 'Sui Mainnet',
    id: customizeChainId('Sui Mainnet'),
    curve: Curve.ed25519,
  },
  {
    name: 'Sui Testnet',
    id: customizeChainId('Sui Testnet'),
    curve: Curve.ed25519,
  },
  {
    name: 'Sui Devnet',
    id: customizeChainId('Sui Devnet'),
    curve: Curve.ed25519,
  },
]

rimrafSync('./index.md')
fs.copyFileSync('./README.md', './index.md')
fs.appendFileSync('./index.md', '\n# References\n')
fs.appendFileSync(
  './index.md',
  '| # | Name | Elliptic Curve | Chain ID | Hex |\n',
)
fs.appendFileSync('./index.md', '| - | - | - | - | - |\n')
chainIds.forEach(({ name, id, curve }, i) => {
  const hex = new BN(id).toArrayLike(Buffer, 'be').toString('hex')
  fs.appendFileSync(
    './index.md',
    `| ${i} | ${name} | ${curve} | ${id} | 0x${hex.replace(/^0+/, '')} |\n`,
  )
  console.log(`✅ ${name} - ${id}: 0x${hex.replace(/^0+/, '')}`)
})