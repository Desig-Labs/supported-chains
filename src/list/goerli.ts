import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class Goerli extends Chain {
  constructor() {
    super({
      name: 'Goerli',
      alias: 'Goerli',
      chainId: '0x5',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/eth-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/eth-logo.png',
      rpcs: [
        'wss://rpc.ankr.com/eth_goerli/ws/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
        'https://rpc.ankr.com/eth_goerli/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
      ],
      group: GroupChain.Ethereum,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: {
        wss: 'wss://rpc.ankr.com/eth_goerli/ws/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
        https:
          'https://rpc.ankr.com/eth_goerli/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
      },
    })
  }
}
