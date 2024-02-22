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
        'wss://rpc.ankr.com/polygon_zkevm/ws',
        'https://rpc.ankr.com/polygon_zkevm',
      ],
      group: GroupChain.Polygon_zkevm,
      getAddress: toEvmAddress,
      isMainnet: true,
      endpoint: {
        wss: 'wss://rpc.ankr.com/polygon_zkevm/ws',
        https: 'https://rpc.ankr.com/polygon_zkevm',
      },
    })
  }
}
