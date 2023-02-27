import { Chain } from '../chain'
import { CryptoSys } from '../cryptosys'

export class BscMainnet extends Chain {
  constructor() {
    super({
      name: 'Binance Smart Chain Mainnet',
      alias: 'Binance',
      chainId: '56',
      cryptosys: CryptoSys.ECDSA,
      icon: '',
      logo: '',
      rpcs: ['https://bsc-dataseed.binance.org'],
      group: 'binance',
    })
  }
}
