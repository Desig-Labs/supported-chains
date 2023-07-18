import { encode } from 'bs58'
import { bech32 } from 'bech32'
import { Point } from '@noble/secp256k1'
import { blake2b } from '@noble/hashes/blake2b'
import { keccak_256, sha3_256 } from '@noble/hashes/sha3'
import { sha256 as nobleSha256 } from '@noble/hashes/sha256'
import { bytesToHex, concatBytes } from '@noble/hashes/utils'
import { ripemd160 as nobleRipemd160 } from '@noble/hashes/ripemd160'
/**
 * Convert a compressed pubkey to an evm address
 * @param pubkey Compressed pubkey
 * @returns Evm address with checksum
 */
export const toEvmAddress = (pubkey: Uint8Array) => {
  try {
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
 * Convert a compressed pubkey to an Sei address
 * @param pubkey Compressed pubkey
 * @returns
 */
export const toSeiAddress = (pubkey: Uint8Array): string =>
  toCosmosAddress(pubkey, 'sei')

/**
 * Convert a pubkey to a solana address
 * @param pubkey Pubkey
 * @returns Solana address
 */
export const toSolanaAddress = (pubkey: Uint8Array) => {
  try {
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
    const buf = new Uint8Array([...pubkey, 0])
    const hash = bytesToHex(sha3_256(buf))
    return `0x${hash}`
  } catch (er) {
    return ''
  }
}
