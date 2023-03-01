import { Chain } from '../chain'
import { CryptoSys } from '../cryptosys'
import { toEvmAddress } from '../utils'

export class BscMainnet extends Chain {
  constructor() {
    super({
      name: 'Binance Smart Chain Mainnet',
      alias: 'Binance',
      chainId: '56',
      cryptosys: CryptoSys.ECDSA,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bsc-icon.png',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bsc-logo.png',
      rpcs: ['https://bsc-dataseed.binance.org'],
      group: 'binance',
      getAddress: toEvmAddress,
    })
  }
}
