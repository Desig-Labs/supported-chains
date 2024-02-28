import { Chain, RpcProvider } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { genEndpoint, toEvmAddress } from '../utils'

export class ScrollTestnet extends Chain {
  constructor(provider?: RpcProvider) {
    const endpoint = {
      wss: 'wss://rpc.ankr.com/scroll_sepolia_testnet/ws',
      https: 'https://rpc.ankr.com/scroll_sepolia_testnet',
    }

    super({
      name: 'Scroll Testnet',
      alias: 'Scroll',
      chainId: '0x8274f',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/scroll-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/scroll-logo.svg',
      group: GroupChain.Scroll,
      getAddress: toEvmAddress,
      isMainnet: false,
      endpoint: genEndpoint(endpoint, provider?.ankr),
    })
  }
}
