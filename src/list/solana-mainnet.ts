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
      rpcs: [
        'https://radial-billowing-gas.solana-mainnet.quiknode.pro/9d19e80c758eb5bd7b86d912e9345aa153db6a8f/',
        'https://api.mainnet-beta.solana.com',
      ],
      group: GroupChain.Solana,
      getAddress: toSolanaAddress,
    })
  }
}
