import { Chain } from '../chain'
import { Code } from '../code'
import { toEvmAddress } from '../utils'

export class BscMainnet extends Chain {
  constructor() {
    super({
      name: 'Binance Smart Chain Mainnet',
      alias: 'Binance',
      chainId: '0x38',
      code: Code.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bsc-icon.png',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bsc-logo.png',
      rpcs: ['https://bsc-dataseed.binance.org'],
      group: 'binance',
      getAddress: toEvmAddress,
    })
  }
}
