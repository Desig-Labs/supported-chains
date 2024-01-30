import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class Ancient8Testnet extends Chain {
  constructor() {
    super({
      name: 'Ancient8 Testnet',
      alias: 'Ancient8 Testnet',
      chainId: '0x1ad1ba8',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/a8-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/a8-logo.svg',
      rpcs: ['https://rpcv2-testnet.ancient8.gg'],
      group: GroupChain.Ancient8,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: {
        https: 'https://rpcv2-testnet.ancient8.gg',
      },
    })
  }
}
