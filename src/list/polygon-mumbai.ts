import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class PolygonMumbai extends Chain {
  constructor() {
    super({
      name: 'Polygon Mumbai',
      alias: 'Polygon Mumbai',
      chainId: '0x13881',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/polygon-pos-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/polygon-pos-logo.svg',
      rpcs: [
        'wss://rpc.ankr.com/polygon_mumbai/ws/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
        'https://rpc.ankr.com/polygon_mumbai/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
      ],
      group: GroupChain.Polygon_pos,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: {
        wss: 'wss://rpc.ankr.com/polygon_mumbai/ws/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
        https:
          'https://rpc.ankr.com/polygon_mumbai/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
      },
    })
  }
}
