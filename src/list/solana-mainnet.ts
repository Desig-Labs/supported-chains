import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toSolanaAddress } from '../utils'

export class SolanaMainnet extends Chain {
  constructor() {
    super({
      name: 'Solana Mainnet',
      alias: 'Solana',
      chainId: '0xbb6a83b4b049e',
      curve: Curve.ed25519,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sol-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sol-logo.svg',
      rpcs: ['https://rpc.ankr.com/solana'],
      group: GroupChain.Solana,
      getAddress: toSolanaAddress,
      isMainnet: true,
      endpoint: {
        wss: 'wss://rpc.ankr.com/solana/ws',
        https: 'https://rpc.ankr.com/solana',
      },
    })
  }
}
