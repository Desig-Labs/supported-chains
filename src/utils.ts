import { encode } from 'bs58'
import { bech32 } from 'bech32'
import { Point } from '@noble/secp256k1'
import { blake2b } from '@noble/hashes/blake2b'
import { keccak_256, sha3_256 } from '@noble/hashes/sha3'
import { sha256 as nobleSha256 } from '@noble/hashes/sha256'
import { bytesToHex, concatBytes } from '@noble/hashes/utils'
import { ripemd160 as nobleRipemd160 } from '@noble/hashes/ripemd160'
import { Endpoint } from './chain'

const SECP256K1_PUBLIC_KEY_SIZE = 33
const ED25519_PUBLIC_KEY_SIZE = 32

const exactEd25519Pubkey = (pubkey: Uint8Array) => {
  if (pubkey.length !== ED25519_PUBLIC_KEY_SIZE) {
    throw new Error(
      `Invalid public key input. Expected ${ED25519_PUBLIC_KEY_SIZE} bytes, got ${pubkey.length}`,
    )
  }
  return true
}

const exactSecp256k1Pubkey = (pubkey: Uint8Array) => {
  if (pubkey.length !== SECP256K1_PUBLIC_KEY_SIZE) {
    throw new Error(
      `Invalid public key input. Expected ${SECP256K1_PUBLIC_KEY_SIZE} bytes, got ${pubkey.length}`,
    )
  }
  return true
}

/**
 * Convert a compressed pubkey to an evm address
 * @param pubkey Compressed pubkey
 * @returns Evm address with checksum
 */
export const toEvmAddress = (pubkey: Uint8Array) => {
  try {
    exactSecp256k1Pubkey(pubkey)
    const point = Point.fromHex(pubkey)
    const pub = point.toRawBytes().subarray(1)
    const hash = bytesToHex(keccak_256(pub).slice(-20))
    const address = `0x${hash}`
    return address
  } catch (er) {
    return ''
  }
}

/**
 * Convert a compressed pubkey to an Cosmos address
 * @param pubkey Compressed pubkey
 * @param prefix Chain name
 * @returns
 */
export const toCosmosAddress = (
  pubkey: Uint8Array,
  prefix = 'cosmos',
): string => {
  try {
    exactSecp256k1Pubkey(pubkey)
    const ripemd160 = nobleRipemd160.create()
    const sha256 = nobleSha256.create()

    const hashPubkey = sha256.update(pubkey).digest()
    const ripemdPubkey = ripemd160.update(hashPubkey).digest()

    return bech32.encode(prefix, bech32.toWords(ripemdPubkey), 0)
  } catch (er) {
    return ''
  }
}

/**
 * Convert a pubkey to a solana address
 * @param pubkey Pubkey
 * @returns Solana address
 */
export const toSolanaAddress = (pubkey: Uint8Array) => {
  try {
    exactEd25519Pubkey(pubkey)
    return encode(pubkey)
  } catch (er) {
    return ''
  }
}

/**
 * Convert a pubkey to a sui address
 * @param pubkey Pubkey
 * @returns Sui address
 */
export const toSuiAddress = (pubkey: Uint8Array) => {
  try {
    exactEd25519Pubkey(pubkey)
    const seed = concatBytes(new Uint8Array([0]), pubkey)
    const hash = bytesToHex(blake2b(seed, { dkLen: 32 }))
      .slice(0, 64)
      .toLowerCase()
    return `0x${hash}`
  } catch (er) {
    return ''
  }
}

/**
 * Convert a pubkey to an aptos address
 * @param pubkey Pubkey
 * @returns Aptos address
 */
export const toAptosAddress = (pubkey: Uint8Array) => {
  try {
    exactEd25519Pubkey(pubkey)
    const buf = new Uint8Array([...pubkey, 0])
    const hash = bytesToHex(sha3_256(buf))
    return `0x${hash}`
  } catch (er) {
    return ''
  }
}

/**
 * Convert a pubkey to an Injective address
 * @param pubkey Pubkey
 * @returns Injective address
 */
export const toInjAddress = (pubkey: Uint8Array) => {
  try {
    const hex = toEvmAddress(pubkey)
    const cleanAddress = hex.startsWith('0x') ? hex.slice(2) : hex
    const addressBuffer = Buffer.from(cleanAddress, 'hex')
    const bech32Address = bech32.encode('inj', bech32.toWords(addressBuffer))
    return bech32Address
  } catch (er) {
    return ''
  }
}

export const genEndpoint = (endpoint: Endpoint, key?: string): Endpoint => {
  if (!key) return endpoint
  return {
    https: endpoint.https + `/${key}`,
    wss: endpoint?.wss ? endpoint?.wss + `/${key}` : '',
  }
}
