import { Chain, RpcProvider } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { genEndpoint, toEvmAddress } from '../utils'

export class FantomMainnet extends Chain {
  constructor(provider?: RpcProvider) {
    const endpoint = {
      wss: '',
      https: 'https://rpc.ankr.com/fantom',
    }

    super({
      name: 'Fantom Mainnet',
      alias: 'Fantom',
      chainId: '0xfa',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/fantom-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/fantom-logo.png',
      group: GroupChain.Fantom,
      getAddress: toEvmAddress,
      isMainnet: true,
      endpoint: genEndpoint(endpoint, provider?.ankr),
    })
  }
}
