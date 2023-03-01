import { Chain } from '../chain'
import { CryptoSys } from '../cryptosys'
import { toSolanaAddress } from '../utils'

export class SolanaDevnet extends Chain {
  constructor() {
    super({
      name: 'Solana Devnet',
      alias: 'Solana Devnet',
      chainId: '3336862955977731',
      cryptosys: CryptoSys.EdDSA,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sol-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sol-icon.svg',
      rpcs: ['https://api.devnet.solana.com'],
      group: 'solana',
      getAddress: toSolanaAddress,
    })
  }
}
