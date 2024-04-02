import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class XLayerTestnet extends Chain {
  constructor() {
    super({
      name: 'X Layer Testnet',
      alias: 'X Layer Testnet',
      chainId: '0xc3',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/x-layer-icon.png',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/x-layer-logo.svg',
      group: GroupChain.XLayer,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: {
        wss: 'wss://testws.xlayer.tech',
        https: 'https://testrpc.xlayer.tech',
      },
    })
  }
}
