import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toCosmosAddress } from '../utils'

export class SeiMainnet extends Chain {
  constructor() {
    super({
      name: 'Sei Mainnet',
      alias: 'Sei',
      chainId: '0x24a5164fcc04',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sei-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sei-logo.png',
      rpcs: [
        'https://rpc.ankr.com/sei/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
      ],
      group: GroupChain.Sei,
      getAddress: (pubkey) => toCosmosAddress(pubkey, 'sei'),
      isMainnet: true,
      endpoint: {
        https:
          'https://rpc.ankr.com/sei/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
        wss: 'wss://rpc.ankr.com/sei/ws/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
      },
    })
  }
}
