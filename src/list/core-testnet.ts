import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class CoreTestnet extends Chain {
  constructor() {
    super({
      name: 'Core Chain Testnet',
      alias: 'Core Chain Testnet',
      chainId: '0x45b',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/core-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/core-logo.svg',
      group: GroupChain.Core,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: {
        https: 'https://rpc.test.btcs.network',
        wss: '',
      },
    })
  }
}
