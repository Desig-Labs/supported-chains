import { Common } from '@ethereumjs/common'
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
  group?: string
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
  public readonly group?: string

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
  }

  getEVMCommon = () => {
    if (this.cryptoSystem === CryptoSys.EdDSA)
      throw new Error('The chain may be not an EVM-based chain')
    return Common.custom({
      name: this.name,
      chainId: BigInt(this.chainId),
      networkId: BigInt(this.networkId),
    })
  }

  get rpc() {
    return this.rpcs[0]
  }
}
