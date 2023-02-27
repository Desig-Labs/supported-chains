import { Chain } from '../chain'
import { CryptoSys } from '../cryptosys'

export class BscTestnet extends Chain {
  constructor() {
    super({
      name: 'Binance Smart Chain Testnet',
      alias: 'BSC Testnet',
      chainId: '97',
      cryptosys: CryptoSys.ECDSA,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bsc-icon.png',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bsc-logo.png',
      rpcs: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
      group: 'binance',
    })
  }
}
