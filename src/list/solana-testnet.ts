import { Chain } from '../chain'
import { Curve } from '../curve'
import { toSolanaAddress } from '../utils'

export class SolanaTestnet extends Chain {
  constructor() {
    super({
      name: 'Solana Testnet',
      alias: 'Solana Testnet',
      chainId: '0x6f09c097f2c10',
      curve: Curve.ed25519,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sol-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sol-icon.svg',
      rpcs: ['https://api.testnet.solana.com'],
      group: 'solana',
      getAddress: toSolanaAddress,
    })
  }
}
