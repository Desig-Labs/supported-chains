import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class ShardeumDapp extends Chain {
  constructor() {
    super({
      name: 'Shardeum Sphinx Dapp 1.X',
      alias: 'Shardeum Sphinx Dapp 1.X',
      chainId: '0x1f91',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/shardeum-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/shardeum-logo.svg',
      rpcs: ['wss://dapps.shardeum.org', 'https://dapps.shardeum.org'],
      group: GroupChain.Shardeum,
      getAddress: toEvmAddress,
    })
  }
}
