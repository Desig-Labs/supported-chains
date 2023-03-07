/**
 * Almost EVM-based chains are available here: https://chainlist.wtf/
 * Other unsupported chains are derived by its hash (../genchain.ts)
 */

import { CryptoScheme, CryptoSys, toScheme } from './cryptosys'

export type ChainParams = {
  name: string
  alias?: string
  chainId: string
  networkId?: string
  cryptosys: CryptoSys
  icon: string
  logo?: string
  rpcs: string[]
  group: string
  getAddress: (pubkey: Uint8Array) => string
}

export class Chain {
  public readonly name: string
  public readonly alias: string
  public readonly chainId: string
  public readonly networkId: string
  public readonly cryptoSystem: CryptoSys
  public readonly cryptoScheme: CryptoScheme
  public readonly icon: string
  public readonly logo: string
  public readonly rpcs: string[]
  public readonly group: string
  public readonly getAddress: (pubkey: Uint8Array) => string

  constructor({
    name,
    alias,
    chainId,
    networkId,
    cryptosys,
    icon,
    logo,
    rpcs,
    group,
    getAddress,
  }: ChainParams) {
    this.name = name
    this.alias = alias || name
    this.chainId = chainId
    this.networkId = networkId || chainId
    this.cryptoSystem = cryptosys
    this.cryptoScheme = toScheme(cryptosys)
    this.icon = icon
    this.logo = logo || icon
    this.rpcs = rpcs
    this.group = group
    this.getAddress = getAddress
  }

  get rpc() {
    return this.rpcs[0]
  }
}
