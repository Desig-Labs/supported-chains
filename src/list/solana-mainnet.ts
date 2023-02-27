import { Chain } from '../chain'
import { CryptoSys } from '../cryptosys'

export class SolanaMainnet extends Chain {
  constructor() {
    super({
      name: 'Solana Mainnet',
      alias: 'Solana',
      chainId: '3297058409350302',
      cryptosys: CryptoSys.EdDSA,
      icon: '',
      logo: '',
      rpcs: ['https://api.mainnet-beta.solana.com'],
      group: 'solana',
    })
  }
}
