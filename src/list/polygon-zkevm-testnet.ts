import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class PolygonZkEVMTestnet extends Chain {
  constructor() {
    super({
      name: 'Polygon zkEVM Testnet',
      alias: 'Polygon zkEVM Testnet',
      chainId: '0x5a2',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/polygon-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/polygon-logo.svg',
      rpcs: [
        'wss://rpc.ankr.com/polygon_zkevm_testnet/ws/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
        'https://rpc.ankr.com/polygon_zkevm_testnet/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
      ],
      group: GroupChain.Polygon_zkevm,
      getAddress: toEvmAddress,
      isMainnet: false,
    })
  }
}
