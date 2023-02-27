import { Chain } from '../chain'
import { CryptoSys } from '../cryptosys'

export class Goerli extends Chain {
  constructor() {
    super({
      name: 'Goerli',
      alias: 'Goerli',
      chainId: '5',
      cryptosys: CryptoSys.ECDSA,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/eth-icon.png',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/eth-logo.png',
      rpcs: ['wss://goerli.infura.io/ws/v3/783c24a3a364474a8dbed638263dc410'],
      group: 'ethereum',
    })
  }
}
