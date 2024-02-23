import { Chain, RpcProvider } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { genEndpoint, toSuiAddress } from '../utils'

export class SuiTestnet extends Chain {
  constructor(provider?: RpcProvider) {
    const endpoint = {
      wss: 'wss://rpc.ankr.com/sui_testnet/ws',
      https: 'https://rpc.ankr.com/sui_testnet',
    }

    super({
      name: 'Sui Testnet',
      alias: 'Sui Testnet',
      chainId: '0x1e157a4655b689',
      curve: Curve.ed25519,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sui-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sui-logo.svg',
      group: GroupChain.Sui,
      getAddress: toSuiAddress,
      isMainnet: false,
      endpoint: genEndpoint(endpoint, provider?.ankr),
    })
  }
}
