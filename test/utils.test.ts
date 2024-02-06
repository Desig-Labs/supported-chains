import { getPublicKey, utils } from '@noble/secp256k1'
import { randomBytes } from '@noble/hashes/utils'
import {
  toAptosAddress,
  toCosmosAddress,
  toEvmAddress,
  toInjAddress,
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

  it('sei address', () => {
    const privkey = utils.randomPrivateKey()
    const pubkey = getPublicKey(privkey, true)
    const address = toCosmosAddress(pubkey, 'sei')
    expect(address).is.not.empty
  })

  it('injective address', () => {
    const pub = new Uint8Array([
      3, 103, 108, 26, 156, 151, 230, 101, 150, 148, 121, 143, 187, 225, 92,
      152, 215, 192, 128, 248, 54, 47, 46, 34, 106, 104, 59, 23, 166, 32, 33, 3,
      193,
    ])
    const address = toInjAddress(pub)
    expect(address).eq('inj1m7qjnc52ugxhvh5rwl60jke30h0l76agfk9jmj')
  })
})
