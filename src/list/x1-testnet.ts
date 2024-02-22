import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class X1Testnet extends Chain {
  constructor() {
    super({
      name: 'X1 Testnet',
      alias: 'X1 Testnet',
      chainId: '0xc3',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/okx-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/okx-logo.svg',
      group: GroupChain.X1,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: {
        wss: 'wss://testws.x1.tech',
        https: 'https://testrpc.x1.tech',
      },
    })
  }
}
