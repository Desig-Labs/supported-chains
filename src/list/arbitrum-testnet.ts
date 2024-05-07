import { Chain, RpcProvider } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { genEndpoint, toEvmAddress } from '../utils'

export class ArbitrumTestnet extends Chain {
  constructor(provider?: RpcProvider) {
    const endpoint = {
      wss: 'wss://rpc.ankr.com/arbitrum_sepolia/ws',
      https: 'https://rpc.ankr.com/arbitrum_sepolia',
    }

    super({
      name: 'Arbitrum Testnet',
      alias: 'Arbitrum Testnet',
      chainId: '0x66eee',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/arb-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/arb-logo.svg',
      group: GroupChain.Arbitrum,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: genEndpoint(endpoint, provider?.ankr),
    })
  }
}
