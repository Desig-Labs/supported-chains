import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class XLayerMainnet extends Chain {
  constructor() {
    super({
      name: 'X Layer Mainnet',
      alias: 'X Layer',
      chainId: '0xc4',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/x-layer-icon.png',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/x-layer-logo.svg',
      group: GroupChain.XLayer,
      getAddress: toEvmAddress,
      isMainnet: true,
      endpoint: {
        wss: 'wss://ws.xlayer.tech',
        https: 'https://rpc.xlayer.tech',
      },
    })
  }
}
