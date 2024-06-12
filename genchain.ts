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
  { name: 'Sepolia', id: 11155111, curve: Curve.secp256k1 },
  { name: 'Binance Smart Chain Mainnet', id: 56, curve: Curve.secp256k1 },
  { name: 'Binance Smart Chain Testnet', id: 97, curve: Curve.secp256k1 },
  { name: 'ZetaChain Athens Testnet', id: 7001, curve: Curve.secp256k1 },
  { name: 'ZetaChain Mainnet', id: 7000, curve: Curve.secp256k1 },
  { name: 'Linea Testnet', id: 59140, curve: Curve.secp256k1 },
  { name: 'Linea Mainnet', id: 59144, curve: Curve.secp256k1 },
  { name: 'Polygon Mainnet', id: 137, curve: Curve.secp256k1 },
  { name: 'Polygon Mumbai', id: 80001, curve: Curve.secp256k1 },
  { name: 'Polygon zkEVM Testnet', id: 1442, curve: Curve.secp256k1 },
  { name: 'Polygon zkEVM Mainnet', id: 1101, curve: Curve.secp256k1 },
  { name: 'Moonbase Alpha', id: 1287, curve: Curve.secp256k1 },
  { name: 'Moonbeam', id: 1284, curve: Curve.secp256k1 },
  { name: 'Shardeum Testnet', id: 8082, curve: Curve.secp256k1 },
  { name: 'Arbitrum Mainnet', id: 42161, curve: Curve.secp256k1 },
  { name: 'Arbitrum Testnet', id: 421614, curve: Curve.secp256k1 },
  { name: 'Taiko Katla L2', id: 167008, curve: Curve.secp256k1 },
  { name: 'Base Mainnet', id: 8453, curve: Curve.secp256k1 },
  { name: 'Base Testnet', id: 84532, curve: Curve.secp256k1 },
  { name: 'Viction Mainnet', id: 88, curve: Curve.secp256k1 },
  { name: 'Viction Testnet', id: 89, curve: Curve.secp256k1 },
  { name: 'Avalanche Mainnet', id: 43114, curve: Curve.secp256k1 },
  { name: 'Avalanche Fuji', id: 43113, curve: Curve.secp256k1 },
  { name: 'X Layer Mainnet', id: 196, curve: Curve.secp256k1 },
  { name: 'X Layer Testnet', id: 195, curve: Curve.secp256k1 },
  { name: 'Bera Testnet', id: 80084, curve: Curve.secp256k1 },
  { name: 'Ancient8 Mainnet', id: 888888888, curve: Curve.secp256k1 },
  { name: 'Ancient8 Testnet', id: 28122024, curve: Curve.secp256k1 },
  { name: 'Fantom Testnet', id: 4002, curve: Curve.secp256k1 },
  { name: 'Fantom Mainnet', id: 250, curve: Curve.secp256k1 },
  { name: 'Scroll Mainnet', id: 534352, curve: Curve.secp256k1 },
  { name: 'Scroll Testnet', id: 534351, curve: Curve.secp256k1 },
  { name: 'Manta Pacific Mainnet', id: 169, curve: Curve.secp256k1 },
  { name: 'Manta Pacific Testnet', id: 3441005, curve: Curve.secp256k1 },
  { name: 'Conflux eSpace', id: 1030, curve: Curve.secp256k1 },
  { name: 'Conflux eSpace Testnet', id: 71, curve: Curve.secp256k1 },
  { name: 'Core Blockchain Mainnet', id: 1116, curve: Curve.secp256k1 },
  { name: 'Core Chain Testnet', id: 1115, curve: Curve.secp256k1 },
  {
    name: 'Injective Mainnet',
    id: customizeChainId('injective-1'),
    curve: Curve.secp256k1,
  },
  {
    name: 'Injective Testnet',
    id: customizeChainId('injective-888'),
    curve: Curve.secp256k1,
  },
  {
    name: 'Blast Mainnet',
    id: 81457,
    curve: Curve.secp256k1,
  },
  {
    name: 'Blast Testnet',
    id: 168587773,
    curve: Curve.secp256k1,
  },
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
  {
    name: 'Movement Devnet',
    id: customizeChainId('Movement Devnet'),
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
