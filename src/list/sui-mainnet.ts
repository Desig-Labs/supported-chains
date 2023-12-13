import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toSuiAddress } from '../utils'

export class SuiMainnet extends Chain {
  constructor() {
    super({
      name: 'Sui Mainnet',
      alias: 'Sui',
      chainId: '0xb0ae19bc39993',
      curve: Curve.ed25519,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sui-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sui-logo.svg',
      rpcs: [
        'wss://rpc.ankr.com/sui/ws/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
        'https://rpc.ankr.com/sui/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
      ],
      group: GroupChain.Sui,
      getAddress: toSuiAddress,
      isMainnet: true,
      endpoint: {
        wss: 'wss://rpc.ankr.com/sui/ws/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
        https:
          'https://rpc.ankr.com/sui/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
      },
    })
  }
}
