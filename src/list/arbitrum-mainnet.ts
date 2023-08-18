import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class ArbitrumMainnet extends Chain {
  constructor() {
    super({
      name: 'Arbitrum Mainnet',
      alias: 'Arbitrum Mainnet',
      chainId: '0xa4b1',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/arb-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/arb-logo.svg',
      rpcs: [
        'wss://rpc.ankr.com/arbitrum/ws/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
        'https://rpc.ankr.com/arbitrum/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
      ],
      group: GroupChain.Arbitrum,
      getAddress: toEvmAddress,
    })
  }
}
