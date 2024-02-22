import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class AvalancheMainnet extends Chain {
  constructor() {
    super({
      name: 'Avalanche Mainnet',
      alias: 'Avalanche',
      chainId: '0xa86a',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/avalanche-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/avalanche-logo.svg',
      rpcs: [
        'wss://rpc.ankr.com/avalanche/ws',
        'https://rpc.ankr.com/avalanche',
      ],
      group: GroupChain.Avalanche,
      getAddress: toEvmAddress,
      isMainnet: true,
      isAnkr: true,
      endpoint: {
        wss: 'wss://rpc.ankr.com/avalanche/ws',
        https: 'https://rpc.ankr.com/avalanche',
      },
    })
  }
}
