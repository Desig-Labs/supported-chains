import { Chain, RpcProvider } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { genEndpoint, toEvmAddress } from '../utils'

export class PolygonMainNet extends Chain {
  constructor(provider?: RpcProvider) {
    const endpoint = {
      wss: 'wss://rpc.ankr.com/polygon/ws',
      https: 'https://rpc.ankr.com/polygon',
    }

    super({
      name: 'Polygon Mainnet',
      alias: 'Polygon',
      chainId: '0x89',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/polygon-pos-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/polygon-pos-logo.svg',
      group: GroupChain.Polygon_pos,
      getAddress: toEvmAddress,
      isMainnet: true,
      endpoint: genEndpoint(endpoint, provider?.ankr),
    })
  }
}
