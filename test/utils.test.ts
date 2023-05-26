import { getPublicKey, utils } from '@noble/secp256k1'
import { randomBytes } from '@noble/hashes/utils'
import {
  toAptosAddress,
  toEvmAddress,
  toSolanaAddress,
  toSuiAddress,
} from '../dist'
import { expect } from 'chai'

describe('utils', () => {
  it('evm address', () => {
    const privkey = utils.randomPrivateKey()
    const pubkey = getPublicKey(privkey, true)
    const address = toEvmAddress(pubkey)
    expect(address).is.not.empty
  })

  it('solana address', () => {
    const pubkey = randomBytes(32)
    const address = toSolanaAddress(pubkey)
    expect(address).is.not.empty
  })

  it('sui address', () => {
    const pubkey = randomBytes(32)
    const address = toSuiAddress(pubkey)
    expect(address).is.not.empty
  })

  it('aptos address', () => {
    const pubkey = randomBytes(32)
    const address = toAptosAddress(pubkey)
    expect(address).is.not.empty
  })
})
