import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class ShardeumValidator extends Chain {
  constructor() {
    super({
      name: 'Shardeum Sphinx Validator 1.X',
      alias: 'Shardeum Sphinx Validator 1.X',
      chainId: '8082',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/shardeum-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/shardeum-logo.svg',
      rpcs: ['https://sphinx.shardeum.org'],
      group: GroupChain.Shardeum,
      getAddress: toEvmAddress,
    })
  }
}
