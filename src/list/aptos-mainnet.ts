import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toAptosAddress } from '../utils'

export class AptosMainnet extends Chain {
  constructor() {
    super({
      name: 'Aptos Mainnet',
      alias: 'Aptos',
      chainId: '0x21c26a5834152',
      curve: Curve.ed25519,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/apt-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/apt-logo.png',
      rpcs: [
        'https://rpc.ankr.com/http/aptos/v1/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
      ],
      group: GroupChain.Aptos,
      getAddress: toAptosAddress,
      isMainnet: true,
      endpoint: {
        wss: 'wss://rpc.ankr.com/http/aptos/v1/ws/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
        https:
          'https://rpc.ankr.com/http/aptos/v1/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
      },
    })
  }
}
