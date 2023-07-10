import { Chain } from '../chain'
import { Curve } from '../curve'
import { toEvmAddress } from '../utils'

export class Moonbeam extends Chain {
  constructor() {
    super({
      name: 'Moonbeam',
      alias: 'Moonbeam',
      chainId: '0x504',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/moonbeam-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/moonbeam-logo.svg',
      rpcs: [
        'wss://rpc.ankr.com/moonbeam/ws/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
        'https://rpc.ankr.com/moonbeam/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
      ],
      group: 'moonbeam',
      getAddress: toEvmAddress,
    })
  }
}
