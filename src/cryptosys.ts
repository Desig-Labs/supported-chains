export type CryptoScheme = 'eddsa' | 'ecdsa'

export enum CryptoSys {
  EdDSA,
  ECDSA,
}

export const toScheme = (cryptosys: CryptoSys | number): CryptoScheme => {
  switch (cryptosys) {
    case CryptoSys.EdDSA:
      return 'eddsa'
    case CryptoSys.ECDSA:
      return 'ecdsa'
    default:
      throw new Error('Unsupported crypto system')
  }
}

export const toSys = (scheme: CryptoScheme | string): CryptoSys => {
  switch (scheme) {
    case 'eddsa':
      return CryptoSys.EdDSA
    case 'ecdsa':
      return CryptoSys.ECDSA
    default:
      throw new Error('Unsupported crypto scheme')
  }
}
