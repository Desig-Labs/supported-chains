import { Chain } from '../chain'
import { Curve } from '../curve'
import { toSuiAddress } from '../utils'

export class SuiTestnet extends Chain {
  constructor() {
    super({
      name: 'Sui Testnet',
      alias: 'Sui Testnet',
      chainId: '0x1e157a4655b689',
      curve: Curve.ed25519,
      icon: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sui-icon.png',
      logo: 'https://raw.githubusercontent.com/Desig-Labs/supported-chains/master/src/static/sui-logo.svg',
      rpcs: ['https://fullnode.testnet.sui.io'],
      group: 'sui',
      getAddress: toSuiAddress,
    })
  }
}
