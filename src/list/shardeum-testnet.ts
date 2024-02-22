import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class ShardeumTestnet extends Chain {
  constructor() {
    super({
      name: 'Shardeum Testnet',
      alias: 'Shardeum Testnet',
      chainId: '0x1f92',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/shardeum-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/shardeum-logo.svg',
      group: GroupChain.Shardeum,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: {
        wss: 'wss://sphinx.shardeum.org',
        https: 'https://sphinx.shardeum.org',
      },
    })
  }
}
