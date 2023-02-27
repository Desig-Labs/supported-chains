import { Chain } from '../chain'
import { CryptoSys } from '../cryptosys'

export class SolanaTestnet extends Chain {
  constructor() {
    super({
      name: 'Solana Testnet',
      alias: 'Solana Testnet',
      chainId: '1953402825157648',
      cryptosys: CryptoSys.EdDSA,
      icon: '',
      logo: '',
      rpcs: ['https://api.testnet.solana.com'],
      group: 'solana',
    })
  }
}
