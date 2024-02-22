import { Chain, RpcProvider } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { genEndpoint, toSolanaAddress } from '../utils'

export class SolanaMainnet extends Chain {
  constructor(provider?: RpcProvider) {
    const endpoint = {
      wss: 'wss://rpc.ankr.com/solana/ws',
      https: 'https://rpc.ankr.com/solana',
    }

    super({
      name: 'Solana Mainnet',
      alias: 'Solana',
      chainId: '0xbb6a83b4b049e',
      curve: Curve.ed25519,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sol-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sol-logo.svg',
      group: GroupChain.Solana,
      getAddress: toSolanaAddress,
      isMainnet: true,
      endpoint: genEndpoint(endpoint, provider?.ankr),
    })
  }
}
