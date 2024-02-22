import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class Ancient8Mainnet extends Chain {
  constructor() {
    super({
      name: 'Ancient8 Mainnet',
      alias: 'Ancient8',
      chainId: '0x34fb5e38',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/a8-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/a8-logo.svg',
      rpcs: ['', 'https://rpc.ancient8.gg'],
      group: GroupChain.Ancient8,
      getAddress: toEvmAddress,
      isMainnet: true,
      isAnkr: false,
      endpoint: {
        https: 'https://scan.ancient8.gg',
        wss: '',
      },
    })
  }
}
