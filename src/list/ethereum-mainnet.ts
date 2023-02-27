import { Chain } from '../chain'
import { CryptoSys } from '../cryptosys'

export class EthereumMainnet extends Chain {
  constructor() {
    super({
      name: 'Ethereum Mainnet',
      alias: 'Ethereum',
      chainId: '1',
      cryptosys: CryptoSys.ECDSA,
      icon: '',
      logo: '',
      rpcs: ['wss://mainnet.infura.io/ws/v3/783c24a3a364474a8dbed638263dc410'],
      group: 'ethereum',
    })
  }
}
