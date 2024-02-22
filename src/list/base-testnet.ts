import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class BaseTestnet extends Chain {
  constructor() {
    super({
      name: 'Base Goerli',
      alias: 'Base Goerli',
      chainId: '0x14a33',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/base-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/base-logo.svg',
      rpcs: [
        'wss://rpc.ankr.com/base_goerli/ws',
        'https://rpc.ankr.com/base_goerli',
      ],
      group: GroupChain.Base,
      getAddress: toEvmAddress,
      isMainnet: false,
      isAnkr: true,
      endpoint: {
        wss: 'wss://rpc.ankr.com/base_goerli/ws',
        https: 'https://rpc.ankr.com/base_goerli',
      },
    })
  }
}
