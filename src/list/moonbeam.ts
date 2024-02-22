import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
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
      rpcs: ['wss://rpc.ankr.com/moonbeam/ws', 'https://rpc.ankr.com/moonbeam'],
      group: GroupChain.Moonbeam,
      getAddress: toEvmAddress,
      isMainnet: true,
      endpoint: {
        wss: 'wss://rpc.ankr.com/moonbeam/ws',
        https: 'https://rpc.ankr.com/moonbeam',
      },
    })
  }
}
