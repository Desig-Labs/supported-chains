import fs from 'fs'
import { rimrafSync } from 'rimraf'
import { sha512 } from '@noble/hashes/sha512'
import BN from 'bn.js'
import { Code } from './src/code'

const customizeChainId = (name: string) => {
  const r = BN.red(new BN(Number.MAX_SAFE_INTEGER))
  const seed = new BN(sha512(name), 16, 'le')
  return seed.toRed(r).toNumber()
}

const chainIds: Array<{ name: string; id: number; code: Code }> = [
  {
    name: 'Ethereum Mainnet',
    id: 1,
    code: Code.secp256k1,
  },
  {
    name: 'Goerli',
    id: 5,
    code: Code.secp256k1,
  },
  {
    name: 'Sepolia',
    id: 11155111,
    code: Code.secp256k1,
  },
  {
    name: 'Binance Smart Chain Mainnet',
    id: 56,
    code: Code.secp256k1,
  },
  {
    name: 'Binance Smart Chain Testnet',
    id: 97,
    code: Code.secp256k1,
  },
  {
    name: 'Solana Mainnet',
    id: customizeChainId('Solana Mainnet'),
    code: Code.ed25519,
  },
  {
    name: 'Solana Testnet',
    id: customizeChainId('Solana Testnet'),
    code: Code.ed25519,
  },
  {
    name: 'Solana Devnet',
    id: customizeChainId('Solana Devnet'),
    code: Code.ed25519,
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
chainIds.forEach(({ name, id, code }, i) => {
  const hex = new BN(id).toArrayLike(Buffer, 'be').toString('hex')
  fs.appendFileSync(
    './index.md',
    `| ${i} | ${name} | ${code} | ${id} | 0x${hex.replace(/^0+/, '')} |\n`,
  )
  console.log(`✅ ${name} - ${id}: 0x${hex.replace(/^0+/, '')}`)
})
