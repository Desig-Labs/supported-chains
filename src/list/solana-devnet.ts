import { Chain } from '../chain'
import { CryptoSys } from '../cryptosys'

export class SolanaDevnet extends Chain {
  constructor() {
    super({
      name: 'Solana Devnet',
      alias: 'Solana Devnet',
      chainId: '3336862955977731',
      cryptosys: CryptoSys.EdDSA,
      icon: '',
      logo: '',
      rpcs: ['https://api.devnet.solana.com'],
      group: 'solana',
    })
  }
}
