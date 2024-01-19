import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class PolygonMumbai extends Chain {
  constructor() {
    super({
      name: 'Polygon Mumbai',
      alias: 'Polygon Mumbai',
      chainId: '0x13881',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/polygon-pos-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/polygon-pos-logo.svg',
      rpcs: [
        'wss://rpc.ankr.com/polygon_mumbai/ws/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
        'https://rpc.ankr.com/polygon_mumbai/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
      ],
      group: GroupChain.Polygon_pos,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: {
        wss: 'wss://rpc.ankr.com/polygon_mumbai/ws/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
        https:
          'https://rpc.ankr.com/polygon_mumbai/51585d3e88bdfa7a4f9376afeb1b80ecfaf3c9e8edbc80645f251623f8a76e7f',
      },
    })
  }
}
