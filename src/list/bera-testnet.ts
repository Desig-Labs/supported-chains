import { Chain, RpcProvider } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { genEndpoint, toEvmAddress } from '../utils'

export class BeraTestnet extends Chain {
  constructor(provider?: RpcProvider) {
    const endpoint = {
      https: 'https://rpc.ankr.com/berachain_testnet',
      wss: '',
    }

    super({
      name: 'Bera Testnet',
      alias: 'Bera Testnet',
      chainId: '0x138d5',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bera-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bera-logo.png',
      group: GroupChain.Bera,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: genEndpoint(endpoint, provider?.ankr),
    })
  }
}
