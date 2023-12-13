import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toSolanaAddress } from '../utils'

export class SolanaDevnet extends Chain {
  constructor() {
    super({
      name: 'Solana Devnet',
      alias: 'Solana Devnet',
      chainId: '0xbdadbf327bc03',
      curve: Curve.ed25519,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sol-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sol-logo.svg',
      rpcs: [
        'wss://rpc.ankr.com/solana_devnet/ws/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
        'https://rpc.ankr.com/solana_devnet/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
      ],
      group: GroupChain.Solana,
      getAddress: toSolanaAddress,
      isMainnet: false,
      endpoint: {
        wss: 'wss://rpc.ankr.com/solana_devnet/ws/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
        https:
          'https://rpc.ankr.com/solana_devnet/6fd209c7de745965c5b2092cb14245501fb6d4bd12a11db785dda62ab94cb2a4',
      },
    })
  }
}
