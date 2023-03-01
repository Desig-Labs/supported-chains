import { Point } from '@noble/secp256k1'
import { keccak_256 } from '@noble/hashes/sha3'
import { encode } from 'bs58'
import Web3 from 'web3'

/**
 * Convert a compressed pubkey to an evm address
 * @param pubkey Compressed pubkey
 * @returns Evm address with checksum
 */
export const toEvmAddress = (pubkey: Uint8Array) => {
  const point = Point.fromHex(pubkey)
  const pub = point.toRawBytes().subarray(1)
  const hash = Web3.utils.bytesToHex([...keccak_256(pub).slice(-20)])
  const address = Web3.utils.toChecksumAddress(hash)
  return address
}

/**
 * Convert a pubkey to a solana address
 * @param pubkey Pubkey
 * @returns Solana address
 */
export const toSolanaAddress = (pubkey: Uint8Array) => {
  return encode(pubkey)
}
