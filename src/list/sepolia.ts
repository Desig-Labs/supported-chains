import { Chain } from '../chain'
import { CryptoSys } from '../cryptosys'
import { toEvmAddress } from '../utils'

export class Sepolia extends Chain {
  constructor() {
    super({
      name: 'Sepolia',
      alias: 'Sepolia',
      chainId: '11155111',
      cryptosys: CryptoSys.ECDSA,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/eth-icon.png',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/eth-logo.png',
      rpcs: ['wss://sepolia.infura.io/ws/v3/783c24a3a364474a8dbed638263dc410'],
      group: 'ethereum',
      getAddress: toEvmAddress,
    })
  }
}
