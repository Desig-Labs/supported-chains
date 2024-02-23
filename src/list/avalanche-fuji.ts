import { Chain, RpcProvider } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { genEndpoint, toEvmAddress } from '../utils'

export class AvalancheFuji extends Chain {
  constructor(provider?: RpcProvider) {
    const endpoint = {
      wss: 'wss://rpc.ankr.com/avalanche_fuji/ws',
      https: 'https://rpc.ankr.com/avalanche_fuji',
    }

    super({
      name: 'Avalanche Fuji',
      alias: 'Avalanche Fuji',
      chainId: '0xa869',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/avalanche-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/avalanche-logo.svg',
      group: GroupChain.Avalanche,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: genEndpoint(endpoint, provider?.ankr),
    })
  }
}
