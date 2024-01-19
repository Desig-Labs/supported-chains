import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class PolygonZkEVMMainNet extends Chain {
  constructor() {
    super({
      name: 'Polygon zkEVM Mainnet',
      alias: 'Polygon zkEVM',
      chainId: '0x44d',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/polygon-zkevm-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/polygon-zkevm-logo.svg',
      rpcs: [
        'wss://rpc.ankr.com/polygon_zkevm/ws/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
        'https://rpc.ankr.com/polygon_zkevm/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
      ],
      group: GroupChain.Polygon_zkevm,
      getAddress: toEvmAddress,
      isMainnet: true,
      endpoint: {
        wss: 'wss://rpc.ankr.com/polygon_zkevm/ws/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
        https:
          'https://rpc.ankr.com/polygon_zkevm/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
      },
    })
  }
}
