import { Chain } from '../chain'
import { Curve } from '../curve'
import { GroupChain } from '../types'
import { toEvmAddress } from '../utils'

export class BscMainnet extends Chain {
  constructor() {
    super({
      name: 'Binance Smart Chain Mainnet',
      alias: 'Binance',
      chainId: '0x38',
      curve: Curve.secp256k1,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bsc-icon.svg',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/bsc-logo.png',
      rpcs: [
        'wss://light-newest-vineyard.bsc.quiknode.pro/3271e15ee3c81409ad5b4a5de629706a5af9ad6e',
        'https://light-newest-vineyard.bsc.quiknode.pro/3271e15ee3c81409ad5b4a5de629706a5af9ad6e/',
        'https://bsc-dataseed.binance.org',
      ],
      group: GroupChain.Binance,
      getAddress: toEvmAddress,
    })
  }
}
