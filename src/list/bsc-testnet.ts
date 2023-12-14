import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class BscTestnet extends Chain {
  constructor() {
    super({
      name: 'Binance Smart Chain Testnet',
      alias: 'BSC Testnet',
      chainId: '0x61',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bsc-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bsc-logo.png',
      rpcs: [
        'wss://rpc.ankr.com/bsc_testnet_chapel/ws/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
        'https://rpc.ankr.com/bsc_testnet_chapel/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
      ],
      group: GroupChain.Binance,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: {
        wss: 'wss://rpc.ankr.com/bsc_testnet_chapel/ws/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
        https:
          'https://rpc.ankr.com/bsc_testnet_chapel/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
      },
    })
  }
}
