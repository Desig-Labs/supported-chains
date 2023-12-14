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
        'wss://rpc.ankr.com/avalanche/ws/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
        'https://rpc.ankr.com/avalanche/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
      ],
      group: GroupChain.Avalanche,
      getAddress: toEvmAddress,
      isMainnet: true,
      endpoint: {
        wss: 'wss://rpc.ankr.com/avalanche/ws/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
        https:
          'https://rpc.ankr.com/avalanche/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
      },
    })
  }
}
