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
  group: GroupChain
  isMainnet: boolean
  getAddress: (pubkey: Uint8Array) => string
  endpoint: Endpoint
}
export type RpcProvider = {
  ankr?: string
}

export type Endpoint = {
  https: string
  wss?: string
}
export class Chain {
  public readonly name: string
  public readonly alias: string
  public readonly chainId: string
  public readonly networkId: string
  public readonly curve: Curve
  public readonly icon: string
  public readonly logo: string
  public readonly group: GroupChain
  public readonly getAddress: (pubkey: Uint8Array) => string
  public readonly isMainnet: boolean
  public readonly endpoint: Endpoint
  constructor({
    name,
    alias,
    chainId,
    networkId,
    curve,
    icon,
    logo,
    group,
    getAddress,
    isMainnet,
    endpoint,
  }: ChainParams) {
    this.name = name
    this.alias = alias || name
    this.chainId = chainId
    this.networkId = networkId || chainId
    this.curve = curve
    this.icon = icon
    this.logo = logo || icon
    this.group = group
    this.getAddress = getAddress
    this.isMainnet = isMainnet
    this.endpoint = endpoint
  }
}
