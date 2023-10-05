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
  { name: 'Ethereum Mainnet', id: 1, curve: Curve.secp256k1 },
  { name: 'Goerli', id: 5, curve: Curve.secp256k1 },
  { name: 'Sepolia', id: 11155111, curve: Curve.secp256k1 },
  { name: 'Binance Smart Chain Mainnet', id: 56, curve: Curve.secp256k1 },
  { name: 'Binance Smart Chain Testnet', id: 97, curve: Curve.secp256k1 },
  { name: 'ZetaChain Athens Testnet', id: 7001, curve: Curve.secp256k1 },
  { name: 'ZetaChain Mainnet', id: 7000, curve: Curve.secp256k1 },
  { name: 'Hedera Mainnet', id: 295, curve: Curve.secp256k1 },
  { name: 'Hedera Testnet', id: 296, curve: Curve.secp256k1 },
  { name: 'Hedera Previewnet', id: 297, curve: Curve.secp256k1 },
  { name: 'Linea Testnet', id: 59140, curve: Curve.secp256k1 },
  { name: 'Linea Mainnet', id: 59144, curve: Curve.secp256k1 },
  { name: 'Polygon Mainnet', id: 137, curve: Curve.secp256k1 },
  { name: 'Polygon Mumbai', id: 80001, curve: Curve.secp256k1 },
  { name: 'Polygon zkEVM Testnet', id: 1442, curve: Curve.secp256k1 },
  { name: 'Polygon zkEVM Mainnet', id: 1101, curve: Curve.secp256k1 },
  { name: 'Moonbase Alpha', id: 1287, curve: Curve.secp256k1 },
  { name: 'Moonbeam', id: 1284, curve: Curve.secp256k1 },
  { name: 'Shardeum Testnet', id: 8081, curve: Curve.secp256k1 },
  { name: 'Arbitrum Mainnet', id: 42161, curve: Curve.secp256k1 },
  { name: 'Arbitrum Testnet', id: 421613, curve: Curve.secp256k1 },
  { name: 'Taiko Grimsvotn L2', id: 167005, curve: Curve.secp256k1 },
  { name: 'Taiko Eldfell L3', id: 167006, curve: Curve.secp256k1 },
  { name: 'Base Mainnet', id: 8453, curve: Curve.secp256k1 },
  { name: 'Base Goerli', id: 84531, curve: Curve.secp256k1 },
  {
    name: 'Sei Mainnet',
    id: customizeChainId('Sei Mainnet'),
    curve: Curve.secp256k1,
  },
  {
    name: 'Sei Testnet',
    id: customizeChainId('Sei Testnet'),
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
  {
    name: 'Aptos Mainnet',
    id: customizeChainId('Aptos Mainnet'),
    curve: Curve.ed25519,
  },
  {
    name: 'Aptos Testnet',
    id: customizeChainId('Aptos Testnet'),
    curve: Curve.ed25519,
  },
  {
    name: 'Aptos Devnet',
    id: customizeChainId('Aptos Devnet'),
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
