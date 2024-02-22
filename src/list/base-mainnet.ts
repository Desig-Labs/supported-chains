import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class BaseMainnet extends Chain {
  constructor() {
    super({
      name: 'Base Mainnet',
      alias: 'Base',
      chainId: '0x2105',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/base-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/base-logo.svg',
      rpcs: ['wss://rpc.ankr.com/base/ws', 'https://rpc.ankr.com/base'],
      group: GroupChain.Base,
      getAddress: toEvmAddress,
      isMainnet: true,
      endpoint: {
        wss: 'wss://rpc.ankr.com/base/ws',
        https: 'https://rpc.ankr.com/base',
      },
    })
  }
}
