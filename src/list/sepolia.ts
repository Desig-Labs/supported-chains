import { Chain } from '../chain'
import { CryptoSys } from '../cryptosys'

export class Sepolia extends Chain {
  constructor() {
    super({
      name: 'Sepolia',
      alias: 'Sepolia',
      chainId: '11155111',
      cryptosys: CryptoSys.ECDSA,
      icon: '',
      logo: '',
      rpcs: ['wss://sepolia.infura.io/ws/v3/783c24a3a364474a8dbed638263dc410'],
      group: 'ethereum',
    })
  }
}
