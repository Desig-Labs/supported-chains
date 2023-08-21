/**
 * Almost EVM-based chains are available here: https://chainlist.wtf/
 * Other unsupported chains are derived by its hash (../genchain.ts)
 */

import { Curve } from './curve'
import { GroupChain } from './types'

export type ChainParams = {
  name: string
  alias?: string
  chainId: string
  networkId?: string
  curve: Curve
  icon: string
  logo?: string
  rpcs: string[]
  group: GroupChain
  isMainnet: boolean
  getAddress: (pubkey: Uint8Array) => string
}

export class Chain {
  public readonly name: string
  public readonly alias: string
  public readonly chainId: string
  public readonly networkId: string
  public readonly curve: Curve
  public readonly icon: string
  public readonly logo: string
  public readonly rpcs: string[]
  public readonly group: GroupChain
  public readonly getAddress: (pubkey: Uint8Array) => string
  public readonly isMainnet: boolean

  constructor({
    name,
    alias,
    chainId,
    networkId,
    curve,
    icon,
    logo,
    rpcs,
    group,
    getAddress,
    isMainnet,
  }: ChainParams) {
    this.name = name
    this.alias = alias || name
    this.chainId = chainId
    this.networkId = networkId || chainId
    this.curve = curve
    this.icon = icon
    this.logo = logo || icon
    this.rpcs = rpcs
    this.group = group
    this.getAddress = getAddress
    this.isMainnet = isMainnet
  }

  get rpc() {
    return this.rpcs[0]
  }
}
