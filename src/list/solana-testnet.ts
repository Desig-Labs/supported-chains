import { Chain } from '../chain'
import { CryptoSys } from '../cryptosys'
import { toSolanaAddress } from '../utils'

export class SolanaTestnet extends Chain {
  constructor() {
    super({
      name: 'Solana Testnet',
      alias: 'Solana Testnet',
      chainId: '1953402825157648',
      cryptosys: CryptoSys.EdDSA,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sol-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sol-icon.svg',
      rpcs: ['https://api.testnet.solana.com'],
      group: 'solana',
      getAddress: toSolanaAddress,
    })
  }
}
