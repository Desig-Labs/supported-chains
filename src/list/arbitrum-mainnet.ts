import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class ArbitrumMainnet extends Chain {
  constructor() {
    super({
      name: 'Arbitrum',
      alias: 'Arbitrum',
      chainId: '0xa4b1',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/arb-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/arb-logo.svg',
      rpcs: ['wss://rpc.ankr.com/arbitrum/ws', 'https://rpc.ankr.com/arbitrum'],
      group: GroupChain.Arbitrum,
      getAddress: toEvmAddress,
      isMainnet: true,
      endpoint: {
        wss: 'wss://rpc.ankr.com/arbitrum/ws',
        https: 'https://rpc.ankr.com/arbitrum',
      },
    })
  }
}
