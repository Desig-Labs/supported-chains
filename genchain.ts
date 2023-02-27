import { sha512 } from '@noble/hashes/sha512'
import BN from 'bn.js'

const chains = ['Solana Mainnet', 'Solana Testnet', 'Solana Devnet']

chains.forEach((chain) => {
  const r = BN.red(new BN(Number.MAX_SAFE_INTEGER))
  const seed = new BN(sha512(chain), 16, 'le')
  const id = seed.toRed(r).toNumber()
  console.log(`✅ ${chain}: ${id}`)
})
